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

/** GET /items - returns `{items: [item, ...]}` */
test("GET, /items, request all items from db", async function() {
  const res = await request(app).get("/items");

  expect(res.body.items.length).toEqual(3);
  expect(res.body).toEqual({ items: [
    {name: "popsicle", price: 1.45},
    {name: "cheerios", price: 3.40},
    {name: "test", price: 999}
  ]});
});

/** GET /items/popsicle - returns `{name: "popsicle", price: 1.45}` */
test("GET, /items/:popsicle, request a single item from db", async function() {
  const res = await request(app).get("/items/popsicle");

  expect(res.body).toEqual({name: "popsicle", price: 1.45});
});

