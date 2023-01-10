const myobj = function (req) {
  let obiekt = {
    strDrink: req.body.strDrink,
    strCategory: req.body.strCategory,
    strAlcoholic: req.body.strAlcoholic,
    strGlass: req.body.strGlass,
    strInstructions: req.body.strInstructions,
    strDrinkThumb: req.body.strDrinkThumb,
    strIngredient1: req.body.strIngredient1 ? req.body.strIngredient1 : null,
    strIngredient2: req.body.strIngredient2 ? req.body.strIngredient2 : null,
    strIngredient3: req.body.strIngredient3 ? req.body.strIngredient3 : null,
    strIngredient4: req.body.strIngredient4 ? req.body.strIngredient4 : null,
    strIngredient5: req.body.strIngredient5 ? req.body.strIngredient5 : null,
    strIngredient6: req.body.strIngredient6 ? req.body.strIngredient6 : null,
    strIngredient7: req.body.strIngredient7 ? req.body.strIngredient7 : null,
    strIngredient8: req.body.strIngredient8 ? req.body.strIngredient8 : null,
    strIngredient9: req.body.strIngredient9 ? req.body.strIngredient9 : null,
    strIngredient10: req.body.strIngredient10 ? req.body.strIngredient10 : null,
    strIngredient11: req.body.strIngredient11 ? req.body.strIngredient11 : null,
    strIngredient12: req.body.strIngredient12 ? req.body.strIngredient12 : null,

    strMeasure1: req.body.strMeasure1 ? req.body.strMeasure1 : null,
    strMeasure2: req.body.strMeasure2 ? req.body.strMeasure2 : null,
    strMeasure3: req.body.strMeasure3 ? req.body.strMeasure3 : null,
    strMeasure4: req.body.strMeasure4 ? req.body.strMeasure4 : null,
    strMeasure5: req.body.strMeasure5 ? req.body.strMeasure5 : null,
    strMeasure6: req.body.strMeasure6 ? req.body.strMeasure6 : null,
    strMeasure7: req.body.strMeasure7 ? req.body.strMeasure7 : null,
    strMeasure8: req.body.strMeasure8 ? req.body.strMeasure8 : null,
    strMeasure9: req.body.strMeasure9 ? req.body.strMeasure9 : null,
    strMeasure10: req.body.strMeasure10 ? req.body.strMeasure10 : null,
    strMeasure11: req.body.strMeasure11 ? req.body.strMeasure11 : null,

    strImageSource: req.body.strImageSource ? req.body.strImageSource : null,
    Comments: req.body.Comments ? req.body.Comments : [],
    Reviews: req.body.Reviews ? req.body.Reviews : [],
  };

  return obiekt;
};

module.exports = myobj;
