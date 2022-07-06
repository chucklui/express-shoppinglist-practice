"use strict";

const express = require("express");
const db = require("./fakeDb");
const router = new express.Router();

//get all the db.items
router.get("/", function (req, res) {
  return res.json({items: db.items});
});

//add a new item
router.post("/", function (req, res) {
  const newItem = req.body;
  db.items.push({...newItem});
  return res.json({added: newItem});
});

//get a specific item according to the given name
router.get("/:name", function (req, res) {
  const item = db.items.find((elem) => elem.name === req.params.name);
  return res.json(item);
});

//update items according to the given name
router.patch("/:name", function(req, res) {
  const newItem = req.body;
  let newitems = db.items.map((e) => e.name === req.params.name ? newItem : e);
  db.items = [...newitems];
  console.log('db.items',db.items);
  return res.json({updated: newItem});
});

//delete an item according to the given name
router.delete("/:name", function(req, res) {
  db.items = db.items.filter((elem) => elem.name !== req.params.name);
  return res.json({message: "Deleted"});
});

module.exports = router;