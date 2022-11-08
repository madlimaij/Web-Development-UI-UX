# Shop API

## Requirements

* Node.js >= 16 (<https://nodejs.org/en/download/>)

## Setup

* Install all the dependencies:

```
npm install
```

## Start server

* Server will start on port 8000

```
npm run start-server
```

## Api endpoints

* Login

```
POST: http://localhost:8000/auth/login

payload:
{
    "email": "demo@gmail.com",
    "password": "demo"
}

response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQG1haWwuY29tIiwicGFzc3dvcmQiOiJicnVubyIsImlhdCI6MTY2Njg5MzM0MiwiZXhwIjoxNjY2ODk2OTQyfQ.DTSr4hyUvjOpu4F3bjKKW_rdhXn5kfBQPuE9w46QGUY"
}
```

* Register

```
POST: http://localhost:8000/auth/register

payload:
{
    "firstName": "Mikk",
    "lastName": "Saabas",
    "email": "mikk.saabas@gmail.com",
    "password": "mikk123"
}

response:
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQG1haWwuY29tIiwicGFzc3dvcmQiOiJicnVubyIsImlhdCI6MTY2Njg5MzM0MiwiZXhwIjoxNjY2ODk2OTQyfQ.DTSr4hyUvjOpu4F3bjKKW_rdhXn5kfBQPuE9w46QGUY"
}
```

* Current user

```
GET: http://localhost:8000/auth/current-user

Authorization: "Bearer <accessToken>"

response:
{
    "firstName": "Demo",
    "lastName": "User",
    "email": "demo@gmail.com"
}
```

* List of products

```
GET: http://localhost:8000/products

Authorization: "Bearer <accessToken>"

response:
[
    {
        "id": 1,
        "name": "Product 1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi! Itaque rerum veritatis adipisci voluptas dignissimos fugit accusamus beatae optio?",
        "price": 22,
        "size": 36,
        "imageUrl": "http://localhost:8000/images/shoe-01.jpg"
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi! Itaque rerum veritatis adipisci voluptas dignissimos fugit accusamus beatae optio?",
        "price": 24,
        "size": 38,
        "imageUrl": "http://localhost:8000/images/shoe-02.jpg"
    }
]
```

* Add new product

```
POST: http://localhost:8000/products

Authorization: "Bearer <accessToken>"

payload:
{
    "name": "Product 4",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi! Itaque rerum veritatis adipisci voluptas dignissimos fugit accusamus beatae optio?",
    "price": 45,
    "size": 43,
    "imageUrl": "http://localhost:8000/images/shoe-04.jpg"
}

response:
{
    "name": "Product 4",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi! Itaque rerum veritatis adipisci voluptas dignissimos fugit accusamus beatae optio?",
    "price": 45,
    "size": 43,
    "imageUrl": "http://localhost:8000/images/shoe-04.jpg",
    "id": 4
}
```

* List of cart items

```
GET: http://localhost:8000/cart-items

Authorization: "Bearer <accessToken>"

response:
[
    {
        "name": "Product 4",
        "price": 45,
        "size": 43,
        "imageUrl": "http://localhost:8000/images/shoe-04.jpg",
        "id": 1
    },
    {
        "name": "Product 3",
        "price": 30,
        "size": 40,
        "imageUrl": "http://localhost:8000/images/shoe-03.jpg",
        "id": 2
    }
]
```

* Add new cart item

```
POST: http://localhost:8000/cart-items

Authorization: "Bearer <accessToken>"

payload:
{
    "name": "Product 2",
    "price": 22,
    "image": "shoe-01.jpg"
}

response:
{
    "name": "Product 2",
    "price": 22,
    "image": "shoe-01.jpg",
    "id": 3
}
```

* Remove cart item

```
DELETE: http://localhost:8000/cart-items/1

Authorization: "Bearer <accessToken>"
```

* Upload file

```
POST: http://localhost:8000/upload-file

payload:
file: FormData

Authorization: "Bearer <accessToken>"
```