const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/comment/add").patch(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    let newComment = {
      name: req.body.name,
      comment: req.body.comment,
      id: req.body.id,
    };
    const result = await db_connect
      .collection("drinks")
      .updateOne(
        { _id: ObjectId(req.body.drinkId) },
        { $push: { Comments: newComment } }
      );
    console.log("Comment added");
    response.json(result);
  } catch (err) {
    throw err;
  }
});

recordRoutes.route("/comments/:id").get(async function (req, res) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    let myquery = { _id: ObjectId(req.params.id) };
    const obj = await db_connect
      .collection("drinks")
      .findOne(myquery, { projection: { Comments: 1, _id: 0 } });
    obj.Comments.reverse();
    res.json(obj);
  } catch (err) {
    throw err;
  }
});

recordRoutes.route("/comments").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        { $unwind: "$Comments" },
        { $sort: { strDrink: 1, "Comments.id": 1 } },
        { $project: { _id: 1, strDrink: 1, Comments: 1 } },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation occured!.",
    });
  }
});

recordRoutes.route("/comments/:drinkId/:id").delete(async function (req, res) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const result = await db_connect
      .collection("drinks")
      .updateOne(
        { _id: ObjectId(req.params.drinkId) },
        { $pull: { Comments: { id: req.params.id } } }
      );
    console.log("1 comment deleted");
    res.json(result);
  } catch (err) {
    throw err;
  }
});

module.exports = recordRoutes;
