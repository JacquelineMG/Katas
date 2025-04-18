// We need to complete a function called chooseRecipe(), which will receive three parameters:

// An array of ingredients in stock at Bakery A
// An array of ingredients in stock at Bakery B
// An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes.
// We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.


const ingredientCheck = (bakery, ingredients) => {
  let array = [];
  for (const j of bakery) {
    console.log(j);
    if (ingredients.includes(j)) {
      console.log(j);
    }
  }
  return array;
};

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let recipe = "";

  for (const i of recipes)
    ingredientCheck(bakeryA, i.ingredients);

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

// bakeryA = ["potatoes", "bay leaf", "raisins"];
// bakeryB = ["red bean", "dijon mustard", "apples"];
// recipes = [
//   {
//     name: "Potato Ganache",
//     ingredients: ["potatoes", "chocolate"],
//   },
//   {
//     name: "Sweet Fish",
//     ingredients: ["anchovies", "honey"],
//   },
//   {
//     name: "Nima's Famous Dijon Raisins",
//     ingredients: ["dijon mustard", "raisins"],
//   },
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));