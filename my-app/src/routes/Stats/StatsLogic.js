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

function GlassTypeData(drinkBase) {
  const glasses_multiple = drinkBase.reduce((prev, curr) => {
    return [...prev, curr.strGlass];
  }, []);

  const glasses_unique = glasses_multiple.reduce((uniqueElements, element) => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    }
    return uniqueElements;
  }, []);

  const result = glasses_unique.map((glass) => {
    const matchingDrinks = drinkBase.filter(
      (drink) => drink.strGlass === glass
    );
    return {
      type: glass,
      number: matchingDrinks.length,
    };
  });

  return result;
}

export { DrinkTypeData, GlassTypeData };
