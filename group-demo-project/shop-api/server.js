const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router("./database.json");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());
server.use("/static", express.static(path.join(__dirname, "public")));
server.use(fileUpload({ createParentPath: true }));

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err);
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  const userDB = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));
  return userDB.users.findIndex(user => user.email === email && user.password === password) !== -1;
}

// Get current user
function getCurrentUser(email) {
  const userDB = JSON.parse(fs.readFileSync("./users.json", "UTF-8"));
  const currentUser = userDB.users.find(user => user.email === email);
  if (currentUser) {
    return {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email
    };
  }
  return null;
}

// Register new user
server.post("/auth/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if(isAuthenticated({email, password}) === true) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length-1].id;

    //Add new user
    data.users.push({ id: last_item_id + 1, email: email, password: password, firstName: firstName, lastName: lastName });
    fs.writeFile("./users.json", JSON.stringify(data), (err) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return
        }
    });
  });

  // Create token for new user
  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === false) {
    const status = 401
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }

  const accessToken = createToken({ email, password });
  res.status(200).json({ accessToken });
});

// Login to one of the users from ./users.json
server.get("/auth/current-user", (req, res) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== "Bearer") {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  
  const token = verifyToken(req.headers.authorization.split(" ")[1]);
  const currentUser = getCurrentUser(token.email);

  if (currentUser) {
    res.status(200).json({ ...currentUser });
    return;
  }

  const status = 401;
  const message = "User not found";
  res.status(401).json({ status, message });
});

server.post("/upload-file", (req, res) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== "Bearer") {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  
  try {
    if (!req.files) {
      res.status(404).json("No file to upload!");
    } else {
      let file = req.files.file;

      file.mv("./public/images/" + file.name);

      res.status(200).json({ fileName: file.name });
    }
  } catch (error) {
    res.status(500).json(err);
  }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(" ")[0] !== "Bearer") {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
       const status = 401;
       const message = "Access token not provided";
       res.status(status).json({ status, message });
       return;
     }
     next()
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});