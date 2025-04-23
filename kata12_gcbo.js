// We need to complete a function called chooseRecipe(), which will receive three parameters:

// An array of ingredients in stock at Bakery A
// An array of ingredients in stock at Bakery B
// An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes.
// We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.


const getIngredientsTally = (bakery1, bakery2, rec) => {
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

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let recipe = "";
  const tally = getIngredientsTally(bakeryA, bakeryB, recipes);

  for (const i in tally) {
    if (tally[i].a > 0 && tally[i].b > 0)
      recipe = i;
  }
  return recipe;
};


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


console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));