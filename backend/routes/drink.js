const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/drinks").get((req, res) => {
  let db_connect = dbo.getDb("coctail_database");

  db_connect
    .collection("drinks")
    .find({})
    .toArray((err, docs) => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error: "Wystąpił błąd podczas pobierania dokumentów z bazy danych.",
        });
      } else {
        res.send(docs);
      }
    });
});

// recordRoutes.route("/drinks", { method: "POST" }).post((req, res) => {
//   let db_connect = dbo.getDb("coctail_database");

//   db_connect
//     .collection("drinks")
//     .find({})
//     .toArray((err, docs) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send({
//           error: "Wystąpił błąd podczas pobierania dokumentów z bazy danych.",
//         });
//       } else {
//         res.status(200).json(docs);
//       }
//     });
// });

recordRoutes.route("/drinks/add").post(function (req, response) {
  let db_connect = dbo.getDb("coctail_database");

  db_connect
    .collection("drinks")
    .findOne({ name: req.body.name }, function (err, result) {
      if (err) throw err;

      if (result) {
        response
          .status(400)
          .send({ error: "Drink o podanej nazwie już istnieje." });
      } else {
        let myobj = {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          quantity: req.body.quantity,
          unit: req.body.unit,
        };
        db_connect.collection("drinks").insertOne(myobj, function (err, res) {
          if (err) throw err;
          response.json(res);
        });
      }
    });
});

module.exports = recordRoutes;
