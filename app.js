'use strict';

const { items } = require("./fakeDb");

//to require express
const express = require("express");
//call express function
const app = express();

//process JSON body => req.body (middleware)
app.use(express.json());

//process traditional form data => req.body (middleware)
app.use(express.urlencoded({ extended: true}));

app.get("/items", function (req, res) {
  return res.send({items});
})


module.exports = app;