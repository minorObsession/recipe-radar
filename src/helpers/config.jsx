import { next7Days } from "./helperFunctions";

//
export const BASE_URL_LOW_CARB = "https://low-carb-recipes.p.rapidapi.com/";

export const optionsForAPI = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "893e44af78mshc99a48c8403004bp153194jsnf7008dc005f0",
    "x-rapidapi-host": "low-carb-recipes.p.rapidapi.com",
  },
};

// ! FORKIFY
export const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";

export const API_KEY = "d1240673-5a70-4f0a-b88d-47164f58d906";

export const weekdays = Array.from({ length: 7 }, (_, i) => next7Days(i));

// const url =
//   "https://low-carb-recipes.p.rapidapi.com/search?name=cake&tags=keto%3Bdairy-free&includeIngredients=egg%3Bbutter&excludeIngredients=cinnamon&maxPrepareTime=10&maxCookTime=20&maxCalories=500&maxNetCarbs=5&maxSugar=3&maxAddedSugar=0&limit=10";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "893e44af78mshc99a48c8403004bp153194jsnf7008dc005f0",
//     "x-rapidapi-host": "low-carb-recipes.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
