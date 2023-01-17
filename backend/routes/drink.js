const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const myobj = require("./drinkPOSTobject");
const putObject = require("./drinkPUTobject");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/drinks").get(async (req, res) => {
  let db_connect = dbo.getDb("coctail_database");
  try {
    const docs = await db_connect
      .collection("drinks")
      .find({})
      .sort({ strDrink: 1 })
      .toArray();
    res.send(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "An error occurred while fetching documents from the database.",
    });
  }
});

recordRoutes.route("/drink/:id").get(async (req, res) => {
  let db_connect = dbo.getDb("coctail_database");
  try {
    const drink = await db_connect
      .collection("drinks")
      .findOne({ _id: ObjectId(req.params.id) });
    res.send(drink);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: "An error occurred while fetching the drink from the database.",
    });
  }
});

recordRoutes.route("/drinks/add").post(async function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  try {
    const result = await db_connect
      .collection("drinks")
      .findOne({ strDrink: req.body.strDrink });
    if (result) {
      response
        .status(400)
        .send({ error: "Drink with this name already exists!" });
    } else {
      let new_obj = myobj(req);
      const res = await db_connect.collection("drinks").insertOne(new_obj);
      console.log("1 document added");
      response.json(res);
    }
  } catch (err) {
    throw err;
  }
});

recordRoutes.route("/drinks/:id").delete(async function (req, res) {
  let db_connect = dbo.getDb("coctail_database");
  let myquery = { _id: ObjectId(req.params.id) };
  try {
    const obj = await new Promise((resolve, reject) => {
      db_connect.collection("drinks").deleteOne(myquery, function (err, obj) {
        if (err) reject(err);
        console.log("1 document deleted");
        resolve(obj);
      });
    });
    res.json(obj);
  } catch (err) {
    throw err;
  }
});

recordRoutes.route("/drinks/update/:id").put(async function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  let newValues = putObject(req);

  try {
    const res = await new Promise((resolve, reject) => {
      db_connect
        .collection("drinks")
        .updateOne(
          { _id: ObjectId(req.params.id) },
          { $set: newValues },
          function (err, res) {
            if (err) reject(err);
            console.log("1 document updated successfully");
            resolve(res);
          }
        );
    });
    response.json(res);
  } catch (err) {
    throw err;
  }
});

module.exports = recordRoutes;
