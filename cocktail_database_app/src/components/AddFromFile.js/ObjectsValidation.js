const ValidateObject = (obj) => {
  const urlRegex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
  const allowedAlcoholic = ["Non alcoholic", "Alcoholic", "Optional alcohol"];
  const requiredKeys = [
    "strDrink",
    "strCategory",
    "strAlcoholic",
    "strGlass",
    "strInstructions",
    "strDrinkThumb",
    "strIngredient1",
    "strMeasure1",
  ];
  const missingKeys = requiredKeys.filter((key) => !obj.hasOwnProperty(key));
  if (!urlRegex.test(obj.strDrinkThumb)) {
    return false;
  }
  if (missingKeys.length > 0) {
    return false;
  }

  if (!allowedAlcoholic.includes(obj.strAlcoholic)) {
    return false;
  }

  return true;
};
export default ValidateObject;
