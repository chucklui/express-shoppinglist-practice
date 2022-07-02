"use strict";

const express = require("express");
let {items} = require("./fakeDb");
const router = new express.Router();

//get all the items
router.get("/", function (req, res) {
  return res.json({items});
});

//add new items
router.post("/", function (req, res) {
  const newItem = req.body;
  items.push(newItem);
  return res.json({added: newItem});
});

//get a specific item according to the given name
router.get("/:name", function (req, res) {
  const item = items.find((elem) => elem.name === req.params.name);
  return res.json(item);
});

//update items according to the given name
router.patch("/:name", function(req, res) {
  const newItem = req.body;
  let newItems = items.map((e) => e.name === req.params.name ? newItem : e);
  items = [...newItems];
  return res.json({updated: newItem});
});

//delete an item according to the given name
router.delete("/:name", function(req, res) {
//console.log("delete item name##############:", req.params.name);
  items = items.filter((elem) => elem.name !== req.params.name);
  // console.log("items after delete:+++++++++++:", items);
  return res.json({message: "Deleted"});
});

module.exports = router;