const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");

recordRoutes.route("/stats/glass").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        {
          $group: {
            _id: "$strGlass",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $project: {
            _id: 0,
            type: "$_id",
            number: "$count",
          },
        },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation.",
    });
  }
});

recordRoutes.route("/stats/alco").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        {
          $group: {
            _id: "$strAlcoholic",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $project: {
            _id: 0,
            type: "$_id",
            number: "$count",
          },
        },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation.",
    });
  }
});

recordRoutes.route("/stats/users").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        {
          $unwind: "$Comments",
        },
        {
          $group: {
            _id: "$Comments.name",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $project: {
            _id: 0,
            type: "$_id",
            number: "$count",
          },
        },
        {
          $limit: 10,
        },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation.",
    });
  }
});
recordRoutes.route("/stats/commented").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        {
          $group: {
            _id: "$strDrink",
            count: { $sum: { $size: "$Comments" } },
          },
        },
        {
          $sort: { count: -1 },
        },
        {
          $limit: 10,
        },
        {
          $project: {
            _id: 0,
            type: "$_id",
            number: "$count",
          },
        },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation.",
    });
  }
});

recordRoutes.route("/stats/thebest").get(async function (req, response) {
  try {
    let db_connect = dbo.getDb("coctail_database");
    const res = await db_connect
      .collection("drinks")
      .aggregate([
        {
          $unwind: "$Reviews",
        },
        {
          $addFields: {
            Reviews: { $convert: { input: "$Reviews", to: "double" } },
          },
        },
        {
          $group: {
            _id: "$strDrink",
            avgReview: { $avg: "$Reviews" },
          },
        },
        {
          $project: {
            _id: 0,
            type: "$_id",
            number: "$avgReview",
          },
        },
        {
          $sort: { number: -1 },
        },
        {
          $limit: 10,
        },
      ])
      .toArray();
    response.json(res);
  } catch (err) {
    console.error(err);
    response.status(500).send({
      error: "Error during aggregation.",
    });
  }
});

module.exports = recordRoutes;
