function GetIngredients(currentDrink) {
  let index = 1;
  let ingredientArray = [];
  while (currentDrink["strIngredient" + index]) {
    ingredientArray.push({
      name: currentDrink["strIngredient" + index],
      amount: currentDrink["strMeasure" + index]
        ? currentDrink["strMeasure" + index]
        : "",
    });
    index++;
  }
  return ingredientArray;
}

export default GetIngredients;
