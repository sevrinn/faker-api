const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// Create 2 functions: createUser and createCompany that each return an object of properties
const createUser = () => {
  const newUser = {
    _id:faker.datatype.uuid(),
    firstName:faker.name.firstName(),
    lastName:faker.name.lastName(),
    phoneNumber:faker.phone.phoneNumber(),
    email:faker.internet.email(),
    password:faker.internet.password(),
  }
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    _id:faker.datatype.uuid(),
    name:faker.company.companyName(),
    address: {
      street:faker.address.streetAddress(),
      city:faker.address.cityName(),
      state:faker.address.stateAbbr(),
      zipCode:faker.address.zipCodeByState(),
      country:faker.address.country(),
    },
  }
  return newCompany;
}


//creates api route that returns a new user
app.get("/api/people/new", (req, res) => {
  const user = createUser();
  res.json(user);
})
//creates api route that returns a new company
app.get("/api/company/new", (req, res) => {
  const company = createCompany();
  res.json(company);
})

//creates api rout that returns new user and company
app.get("/api/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  res.json({user, company});
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );

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