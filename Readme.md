# Comic Book API

This is a RESTful API for managing comic books, built with Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)

## Installation

1. Install Node.js from the [official website](https://nodejs.org/).

2. Clone the repository:
  ```sh
  git clone https://github.com/YashMengji/ComicBook
  cd ComicBook
  ```

3. Install dependencies:
  ```sh
  npm install
  ```

4. Create a MongoDB Atlas account:
   - Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas) and sign up for a free account.

5. Create a new database cluster:
   - Follow the instructions on MongoDB Atlas to create a new cluster. Once the cluster is created, click on "Connect" and follow the steps to allow access from your IP address and create a database user.

6. Get the connection URL:
   - After setting up the cluster, you will be provided with a connection string. Copy this string as you will need it for the next step.

7. Set up environment variables:
  Create a `.env` file in the root directory and add the following:
  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  ```

8. Replace <your_password> in MONGO_URI string with your database password

9. Start the server:
  ```sh
  npm run start
  ```

## Usage

Once the server is running, you can use tools like Postman or cURL to interact with the API.

## Endpoints

### Comic Books

- **GET /api/comics**: Get all comic books
- **POST /api/comics**: Create a new comic book
- **GET /api/comics/:id**: Get a comic book by ID
- **PUT /api/comics/:id**: Update a comic book by ID
- **DELETE /api/comics/:id**: Delete a comic book by ID

## Error Handling

Errors are handled by the custom error handling middleware defined in [`middlewares/errorHandler.js`](middlewares/errorHandler.js).

## Environment Variables

- `PORT`: The port on which the server runs (default: 5000)
- `MONGO_URI`: The connection string for MongoDB
