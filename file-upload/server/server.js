const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(
    fileUpload({
        createParentPath: true
    })
)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test endpoint for hello-world
app.get("/hello", (req, res) => {
    res.status(200).json({ message: "Hello world!" });
});

// Test endpoint - userinfo
app.post("/user-info", (req, res) => {
    console.log("request", req.body.userInfo);

    res.status(201).json("Created");
});

// Upload file endpoint
app.post("/upload-file", (req, res) => {
    try {
        if (!req.files) {
            res.status(404).json({
                status: "failed",
                message: "No file uploaded",
            });
        } else {
            let file = req.files.file;

            res.status(201).json({
                status: "success",
                messaage: "File is uploaded",
                data: {
                    fileName: file.name,
                }
            });
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server started on port: ${port}`))