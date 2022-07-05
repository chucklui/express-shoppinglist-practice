'use strict';

//to require express
const express = require("express");
//to fix CORS issue
const cors = require('cors')
//call express function
const app = express();
const router = require("./routes");

app.use(cors())

//process JSON body => req.body (middleware)
app.use(express.json());

//process traditional form data => req.body (middleware)
// app.use(express.urlencoded({ extended: true}));

app.use("/items", router);


module.exports = app;