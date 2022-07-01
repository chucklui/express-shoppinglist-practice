## set up node and express:
- $ mkdir first-express-app (make a project folder)
- $ cd first-express-app (cd into that folder)
- $ npm init -y (create package.json , package_lock.json)
- $ npm install express@next (install express framework)

## create `app.js` file:
```js
    const express = require("express");
    const app = express();

    // process JSON body => req.body
    app.use(express.json());

    // process traditional form data => req.body
    app.use(express.urlencoded({ extended: true }));

    /** Homepage renders simple message. */

    app.get("/", function (req, res) {
    return res.send("Hello World!");
    });

    module.exports = app;
```

## create `server.js` file:
```js
    //node server.js => start every time after any changes made
    //nodemon server.js => start one time
    const app = require("./app");

    app.listen(3000, function () {
    console.log(
        "Started http://localhost:3000/");
    });
```

## create `routes.js` file and update `app.js` file:
```js
    ########create `routes.js`
    const express = require("express");
    let {items} = require("./fakeDb");
    const router = new express.Router();

    //get all the items
    router.get("/", function (req, res) {
    return res.json({items});
    });

    //add new items
    router.post("/", function (req, res) {
    console.log("new item:", req);
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
    items = items.map((e) => e.name === req.params.name ? newItem : e);
    
    return res.json({updated: newItem});
    });

    //delete an item according to the given name
    router.delete("/:name", function(req, res) {
    items = items.filter((elem) => elem.name !== req.params.name);
    return res.json({message: "Deleted"});
    });

    module.exports = router;


    ########update `app.js`
    //to require express
    const express = require("express");
    //call express function
    const app = express();
    const router = require("./routes");

    //process JSON body => req.body (middleware)
    app.use(express.json());

    //process traditional form data => req.body (middleware)
    app.use(express.urlencoded({ extended: true}));

    app.use("/items", router);

    module.exports = app;
```