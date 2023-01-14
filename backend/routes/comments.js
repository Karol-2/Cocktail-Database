const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

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

recordRoutes.route("/comments").get(function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  db_connect
    .collection("drinks")
    .aggregate([
      { $unwind: "$Comments" },
      { $sort: { strDrink: 1, "Comments.id": 1 } },
      { $project: { _id: 1, strDrink: 1, Comments: 1 } },
    ])
    .toArray((err, res) => {
      if (err) {
        console.error(err);
        response.status(500).send({
          error: "Error during aggregation occured!.",
        });
      } else {
        response.json(res);
      }
    });
});

recordRoutes.route("/comments/:drinkId/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("coctail_database");
  db_connect
    .collection("drinks")
    .updateOne(
      { _id: ObjectId(req.params.drinkId) },
      { $pull: { Comments: { id: req.params.id } } },
      function (err, obj) {
        if (err) throw err;
        console.log("1 comment deleted");
        res.json(obj);
      }
    );
});

module.exports = recordRoutes;
