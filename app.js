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

//get all the items
app.get("/", function (req, res) {
  return res.send({items});
});

//add new items
app.post("/items", function (req, res) {
  console.log("new item:", req);
  const newItem = req.body;
  items.push(newItem);
  return res.send({added: newItem});
});

//get a specific item according the given name
app.get("/items/:name", function (req, res) {
  const item = items.find((elem) => elem.name === req.params.name);
  return res.send(item);
});


module.exports = app;