const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/reviews/:drinkId/:number").post(async function (req, res) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const result = await db_connect
      .collection("drinks")
      .updateOne(
        { _id: ObjectId(req.params.drinkId) },
        { $push: { Reviews: req.params.number } }
      );
    console.log("1 review added");
    res.json(result);
  } catch (err) {
    throw err;
  }
});

recordRoutes
  .route("/reviews/:drinkId/:oldnumber/:newnumber")
  .put(async function (req, res) {
    try {
      let db_connect = dbo.getDb("coctail_database");
      const result = await db_connect.collection("drinks").updateOne(
        {
          _id: ObjectId(req.params.drinkId),
          Reviews: { $elemMatch: { $eq: req.params.oldnumber } },
        },
        { $set: { "Reviews.$": req.params.newnumber } }
      );
      console.log("1 review changed");
      res.json(result);
    } catch (err) {
      throw err;
    }
  });
module.exports = recordRoutes;
