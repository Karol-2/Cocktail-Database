const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/reviews/:drinkId/:number").post(function (req, res) {
  let db_connect = dbo.getDb("coctail_database");
  db_connect
    .collection("drinks")
    .updateOne(
      { _id: ObjectId(req.params.drinkId) },
      { $push: { Reviews: req.params.number } },
      function (err, obj) {
        if (err) throw err;
        console.log("1 review added");
        res.json(obj);
      }
    );
});

recordRoutes
  .route("/reviews/:drinkId/:oldnumber/:newnumber")
  .put(function (req, res) {
    let db_connect = dbo.getDb("coctail_database");
    db_connect.collection("drinks").updateOne(
      {
        _id: ObjectId(req.params.drinkId),
        Reviews: { $elemMatch: { $eq: req.params.oldnumber } },
      },
      { $set: { "Reviews.$": req.params.newnumber } },
      function (err, obj) {
        if (err) throw err;
        console.log("1 review changed");
        res.json(obj);
      }
    );
  });
module.exports = recordRoutes;
