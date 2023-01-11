const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const myobj = require("./drinkPOSTobject");
const putObject = require("./drinkPUTobject");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/drinks").get((req, res) => {
  let db_connect = dbo.getDb("coctail_database");

  db_connect
    .collection("drinks")
    .find({})
    .sort({ strDrink: 1 })
    .toArray((err, docs) => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error:
            "An error occurred while fetching documents from the database.",
        });
      } else {
        res.send(docs);
      }
    });
});

recordRoutes.route("/drinks/add").post(function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  db_connect
    .collection("drinks")
    .findOne({ strDrink: req.body.strDrink }, function (err, result) {
      if (err) throw err;

      if (result) {
        response
          .status(400)
          .send({ error: "Drink with this name already exists!" });
      } else {
        let new_obj = myobj(req);

        db_connect.collection("drinks").insertOne(new_obj, function (err, res) {
          if (err) throw err;
          console.log("1 document added");
          response.json(res);
        });
      }
    });
});

recordRoutes.route("/drinks/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("coctail_database");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("drinks").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    res.json(obj);
  });
});

recordRoutes.route("/drinks/update/:id").put(function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  let newValues = putObject(req);

  db_connect
    .collection("drinks")
    .updateOne(
      { _id: ObjectId(req.params.id) },
      { $set: newValues },
      function (err, res) {
        if (err) throw err;
        console.log("1 document updated successfully");
        response.json(res);
      }
    );
  console.log(newValues);
  console.log(req.params.id);
});

// ------------------------------------------------
recordRoutes.route("/comment/add").patch(function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  let newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: req.body.id,
  };
  db_connect
    .collection("drinks")
    .updateOne(
      { _id: ObjectId(req.body.drinkId) },
      { $push: { Comments: newComment } },
      function (err, res) {
        if (err) throw err;
        console.log("Comment added");
        response.json(res);
      }
    );
});
recordRoutes.route("/comments/:id").get(function (req, res) {
  let db_connect = dbo.getDb("coctail_database");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("drinks")
    .findOne(
      myquery,
      { projection: { Comments: 1, _id: 0 } },
      function (err, obj) {
        if (err) throw err;
        res.json(obj);
      }
    );
});

module.exports = recordRoutes;
