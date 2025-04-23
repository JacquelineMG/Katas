let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

// get ingredients from recipes

const getIngredientsTally = (rec, bakery1, bakery2) => {
  const list = {};
  for (const r of rec) {
    list[r.name] = {a: 0, b: 0};

    if (bakery1.includes(r.ingredients[0]) || bakery2.includes(r.ingredients[0])) {
      list[r.name].a += 1;
    }

    if (bakery1.includes(r.ingredients[1]) || bakery2.includes(r.ingredients[1])) {
      list[r.name].b += 1;
    }
  }
  return list;
};

const tally = getIngredientsTally(recipes, bakeryA, bakeryB);

const chooseRecipe = callback => {
  let recipe = "";
  for (const i in callback) {
    if (callback[i].a > 0 && callback[i].b > 0)
      recipe = i;
  }
  return recipe;
};

console.log(chooseRecipe(tally));