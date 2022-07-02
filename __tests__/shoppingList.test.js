'use strict';

const request = require("supertest");
const app = require("../app");
let { items } = require('../fakeDb');

const testItem = { name: "test", price: 999 };

beforeEach(function() {
  items.push(testItem);
});

afterEach(function() {
  items = [
    {name: "popsicle", price: 1.45},
    {name: "cheerios", price: 3.40},
  ];
});

// /** GET /items - returns `{items: [item, ...]}` */
// test("GET, /items, request all items from db", async function() {
//   const res = await request(app).get("/items");

//   expect(res.body.items.length).toEqual(3);
//   expect(res.body).toEqual({ items: [
//     {name: "popsicle", price: 1.45},
//     {name: "cheerios", price: 3.40},
//     {name: "test", price: 999}
//   ]});
// });

/** GET /items/popsicle - returns `{name: "popsicle", price: 1.45}` */
// test("GET, /items/:popsicle, request a single item from db", async function() {
//   const res = await request(app).get("/items/popsicle");

//   expect(res.body).toEqual({name: "popsicle", price: 1.45});
// });

// /** Post  /items - return `{added: newItem}` */
// test("Post, /items, add a new item to db", async function() {
//   console.log("items before post:****************", items);
//   const newItem = {name: "test1", price: 100};
//   const res = await request(app).post("/items")
//                                 .send(newItem);
//   console.log("items after post:****************", items);
//   expect(res.statusCode).toEqual(200);
//   expect(res.body.added).toEqual(newItem);
// });

/** Patch  /items/popsicle - return `{updated: newItem}` */
// test("Patch, /items/popsicle, update a item from db", async function() {
//   console.log("items before patch:****************", items);
//   const newItem = {name: "popsicle"};
//   const res = await request(app).patch("/items/popsicle")
//                                 .send(newItem);
                              
//   console.log("items after patch:****************", items);
//   expect(res.body.updated).toEqual(newItem);
//   expect(res.statusCode).toEqual(200);
// });

/** Delete  /items/popsicle - return `{message: "Deleted"}` */
test("Delete, /items/popsicle, delete a item from db", async function() {
  console.log("items before delete&&&&&&&&&&&&:", items);
  const res = await request(app).delete("/items/popsicle");
  
  expect(res.body).toEqual({message: "Deleted"});
  console.log("items after delete*********:", items);
  // expect(items.length).toEqual(2);
  // expect(res.statusCode).toEqual(200);
});