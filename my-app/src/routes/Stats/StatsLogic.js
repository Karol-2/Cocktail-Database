function DrinkTypeData(drinkBase) {
  const data = [
    { type: "Alcoholic", number: 0 },
    { type: "Non alcoholic", number: 0 },
    { type: "Optional alcohol", number: 0 },
  ];
  drinkBase.reduce((prev, curr) => {
    if (curr.strAlcoholic === "Alcoholic") data[0].number += 1;
    else if (curr.strAlcoholic === "Non alcoholic") data[1].number += 1;
    else if (curr.strAlcoholic === "Optional alcohol") data[2].number += 1;
  }, {});
  return data;
}

export default DrinkTypeData;
