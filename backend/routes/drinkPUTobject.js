const putObject = function (req) {
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

  return newValues;
};

module.exports = putObject;
