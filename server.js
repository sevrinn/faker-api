const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

console.log(faker.name.firstName());

// app.get("/api/address", (req, res) => {
//   res.json({message: "Hello World"});
// })

// app.listen( port, () => console.log(`Listening on port: ${port}`) );

/**
 * Import the express module using require()
 * invoke exress
 * set port
 * 
 * use GET to request data from api, 
 * second argument is a call back we want to runwhen a browser make a request
 * 
 * app.listen runs server on specified port
 */