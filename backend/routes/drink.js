const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const myobj = require("./drinkPOSTobject");
// const createNewValues = require("./drinkUPDATEobject");
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
          error:
            "An error occurred while fetching documents from the database.",
        });
      } else {
        console.log("Displayed whole database");
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

  let newValues = {};
  if (req.body.strDrink) newValues.strDrink = req.body.strDrink;
  if (req.body.strCategory) newValues.strCategory = req.body.strCategory;
  if (req.body.strAlcoholic) newValues.strAlcoholic = req.body.strAlcoholic;
  if (req.body.strGlass) newValues.strGlass = req.body.strGlass;
  if (req.body.strInstructions)
    newValues.strInstructions = req.body.strInstructions;
  if (req.body.strDrinkThumb) newValues.strDrinkThumb = req.body.strDrinkThumb;
  if (req.body.strIngredient1)
    newValues.strIngredient1 = req.body.strIngredient1;
  if (req.body.strIngredient2)
    newValues.strIngredient2 = req.body.strIngredient2;
  if (req.body.strIngredient3)
    newValues.strIngredient3 = req.body.strIngredient3;
  if (req.body.strIngredient4)
    newValues.strIngredient4 = req.body.strIngredient4;
  if (req.body.strIngredient5)
    newValues.strIngredient5 = req.body.strIngredient5;
  if (req.body.strIngredient6)
    newValues.strIngredient6 = req.body.strIngredient6;
  if (req.body.strIngredient7)
    newValues.strIngredient7 = req.body.strIngredient7;
  if (req.body.strIngredient8)
    newValues.strIngredient8 = req.body.strIngredient8;
  if (req.body.strIngredient9)
    newValues.strIngredient9 = req.body.strIngredient9;
  if (req.body.strIngredient10)
    newValues.strIngredient10 = req.body.strIngredient10;
  if (req.body.strIngredient11)
    newValues.strIngredient11 = req.body.strIngredient11;
  if (req.body.strMeasure1) newValues.strMeasure1 = req.body.strMeasure1;
  if (req.body.strMeasure2) newValues.strMeasure2 = req.body.strMeasure2;
  if (req.body.strMeasure3) newValues.strMeasure3 = req.body.strMeasure3;
  if (req.body.strMeasure4) newValues.strMeasure4 = req.body.strMeasure4;
  if (req.body.strMeasure5) newValues.strMeasure5 = req.body.strMeasure5;
  if (req.body.strMeasure6) newValues.strMeasure6 = req.body.strMeasure6;
  if (req.body.strMeasure7) newValues.strMeasure7 = req.body.strMeasure7;
  if (req.body.strMeasure8) newValues.strMeasure8 = req.body.strMeasure8;
  if (req.body.strMeasure9) newValues.strMeasure9 = req.body.strMeasure9;
  if (req.body.strMeasure10) newValues.strMeasure10 = req.body.strMeasure10;
  if (req.body.strMeasure11) newValues.strMeasure11 = req.body.strMeasure11;
  if (req.body.strImageSource)
    newValues.strImageSource = req.body.strImageSource;
  if (req.body.Comments) newValues.Comments = req.body.Comments;
  if (req.body.Reviews) newValues.Reviews = req.body.Reviews;

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

module.exports = recordRoutes;
