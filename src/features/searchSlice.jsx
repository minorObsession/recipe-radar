import { createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../helpers/config";
const fakeSavedRecipes = [
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/Roasted2BPortobello2BMushroom2Bwith2BPoached2BEgg2Bin2Ba2BCreamy2BMushroom2BSauce2B5002B34783ded2873.jpg",
    id: "664c8f193e7aa067e94e84d0",
    ingredients: [
      {
        quantity: 2,
        unit: "tbsps",
        description: "oil",
      },
      {
        quantity: 4,
        unit: "",
        description: "small portobello mushrooms stems removed",
      },
      {
        quantity: null,
        unit: "",
        description: "Salt and pepper to taste",
      },
      {
        quantity: 1,
        unit: "oz",
        description: "dried porcini mushrooms",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "hot water",
      },
      {
        quantity: 1,
        unit: "tbsp",
        description: "butter",
      },
      {
        quantity: 1,
        unit: "",
        description: "shallot finely diced",
      },
      {
        quantity: 1,
        unit: "",
        description: "clove garlic chopped",
      },
      {
        quantity: 0.5,
        unit: "tsp",
        description: "thyme chopped",
      },
      {
        quantity: null,
        unit: "",
        description: "Salt and pepper to taste",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "cream",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "parmigiano reggiano grated",
      },
      {
        quantity: 10,
        unit: "oz",
        description: "spinach steamed and squeezed to drain",
      },
      {
        quantity: 4,
        unit: "",
        description: "eggs",
      },
    ],
    title:
      "Roasted Portobello Mushrooms with Poached Eggs in a Creamy Mushroom Sauce",
    servings: 4,
  },
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/paleopumpkinbreadglutenfreegrainfreerecipe413x575b26e.jpg",
    id: "664c8f193e7aa067e94e82ef",
    ingredients: [
      {
        quantity: 1,
        unit: "cup",
        description: "blanched almond flour",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "celtic sea salt",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "baking soda",
      },
      {
        quantity: 1,
        unit: "tbsp",
        description: "cinnamon",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "nutmeg",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "cloves",
      },
      {
        quantity: 1,
        unit: "cup",
        description: "roasted pumpkin",
      },
      {
        quantity: 2,
        unit: "tbsps",
        description: "honey",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "stevia",
      },
      {
        quantity: 3,
        unit: "",
        description: "eggs",
      },
    ],
    title: "Paleo Pumpkin Bread",
    servings: 4,
  },
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/marescrambledeggsavocadoandsmokedsalmonontoasth66e9.jpg",
    id: "664c8f193e7aa067e94e879d",
    ingredients: [
      {
        quantity: 3,
        unit: "",
        description: "tbsp. minced fresh chives divided",
      },
      {
        quantity: 2,
        unit: "",
        description: "tbsp. cr&#232;me fra&#238;che",
      },
      {
        quantity: 6,
        unit: "",
        description: "large eggs",
      },
      {
        quantity: 2,
        unit: "",
        description: "tbsp. unsalted butter",
      },
      {
        quantity: null,
        unit: "",
        description: "Kosher salt and freshly ground black pepper",
      },
      {
        quantity: 4,
        unit: "",
        description:
          "large or 8 small slices sourdough whole wheat or pumpernickel bread toasted",
      },
      {
        quantity: 1,
        unit: "",
        description: "avocado halved pitted peeled and diced",
      },
      {
        quantity: 1,
        unit: "",
        description: "tbsp. fresh lemon juice",
      },
      {
        quantity: 4,
        unit: "",
        description: "oz. thinly sliced smoked salmon",
      },
    ],
    title: "Scrambled Eggs, Avocado, and Smoked Salmon on Toast",
    servings: 4,
  },
  {
    imageUrl: "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg",
    id: "664c8f193e7aa067e94e897b",
    ingredients: [
      {
        quantity: 6,
        unit: "",
        description: "baby artichokes",
      },
      {
        quantity: 400,
        unit: "ml",
        description: "olive oil",
      },
      {
        quantity: 200,
        unit: "ml",
        description: "white wine",
      },
      {
        quantity: 7,
        unit: "",
        description: "black peppercorns",
      },
      {
        quantity: null,
        unit: "",
        description: "A few sprigs thyme",
      },
      {
        quantity: 1,
        unit: "",
        description: "garlic clove",
      },
      {
        quantity: null,
        unit: "",
        description: "Lemon juiced",
      },
      {
        quantity: 300,
        unit: "g",
        description: "stracchino or taleggio cheese sliced",
      },
      {
        quantity: 10,
        unit: "g",
        description: "fresh yeast or 1x 7g pack dried yeast",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "sugar",
      },
      {
        quantity: 375,
        unit: "g",
        description: "00 flour",
      },
      {
        quantity: null,
        unit: "",
        description: "Olive oil",
      },
    ],
    title: "Pizza bianco with artichoke hearts",
    servings: 4,
  },
];

const fakeWeeklyRecipes = [
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/Roasted2BPortobello2BMushroom2Bwith2BPoached2BEgg2Bin2Ba2BCreamy2BMushroom2BSauce2B5002B34783ded2873.jpg",
    id: "664c8f193e7aa067e94e84d0",
    ingredients: [
      {
        quantity: 2,
        unit: "tbsps",
        description: "oil",
      },
      {
        quantity: 4,
        unit: "",
        description: "small portobello mushrooms stems removed",
      },
      {
        quantity: null,
        unit: "",
        description: "Salt and pepper to taste",
      },
      {
        quantity: 1,
        unit: "oz",
        description: "dried porcini mushrooms",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "hot water",
      },
      {
        quantity: 1,
        unit: "tbsp",
        description: "butter",
      },
      {
        quantity: 1,
        unit: "",
        description: "shallot finely diced",
      },
      {
        quantity: 1,
        unit: "",
        description: "clove garlic chopped",
      },
      {
        quantity: 0.5,
        unit: "tsp",
        description: "thyme chopped",
      },
      {
        quantity: null,
        unit: "",
        description: "Salt and pepper to taste",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "cream",
      },
      {
        quantity: 0.5,
        unit: "cup",
        description: "parmigiano reggiano grated",
      },
      {
        quantity: 10,
        unit: "oz",
        description: "spinach steamed and squeezed to drain",
      },
      {
        quantity: 4,
        unit: "",
        description: "eggs",
      },
    ],
    title:
      "Roasted Portobello Mushrooms with Poached Eggs in a Creamy Mushroom Sauce",
    servings: 4,
    weekday: "Sunday",
  },
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/paleopumpkinbreadglutenfreegrainfreerecipe413x575b26e.jpg",
    id: "664c8f193e7aa067e94e82ef",
    ingredients: [
      {
        quantity: 1,
        unit: "cup",
        description: "blanched almond flour",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "celtic sea salt",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "baking soda",
      },
      {
        quantity: 1,
        unit: "tbsp",
        description: "cinnamon",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "nutmeg",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "cloves",
      },
      {
        quantity: 1,
        unit: "cup",
        description: "roasted pumpkin",
      },
      {
        quantity: 2,
        unit: "tbsps",
        description: "honey",
      },
      {
        quantity: 1,
        unit: "tsp",
        description: "stevia",
      },
      {
        quantity: 3,
        unit: "",
        description: "eggs",
      },
    ],
    title: "Paleo Pumpkin Bread",
    servings: 4,
    weekday: "Friday",
  },
  {
    imageUrl:
      "http://forkify-api.herokuapp.com/images/marescrambledeggsavocadoandsmokedsalmonontoasth66e9.jpg",
    id: "664c8f193e7aa067e94e879d",
    ingredients: [
      {
        quantity: 3,
        unit: "",
        description: "tbsp. minced fresh chives divided",
      },
      {
        quantity: 2,
        unit: "",
        description: "tbsp. cr&#232;me fra&#238;che",
      },
      {
        quantity: 6,
        unit: "",
        description: "large eggs",
      },
      {
        quantity: 2,
        unit: "",
        description: "tbsp. unsalted butter",
      },
      {
        quantity: null,
        unit: "",
        description: "Kosher salt and freshly ground black pepper",
      },
      {
        quantity: 4,
        unit: "",
        description:
          "large or 8 small slices sourdough whole wheat or pumpernickel bread toasted",
      },
      {
        quantity: 1,
        unit: "",
        description: "avocado halved pitted peeled and diced",
      },
      {
        quantity: 1,
        unit: "",
        description: "tbsp. fresh lemon juice",
      },
      {
        quantity: 4,
        unit: "",
        description: "oz. thinly sliced smoked salmon",
      },
    ],
    title: "Scrambled Eggs, Avocado, and Smoked Salmon on Toast",
    servings: 4,
    weekday: "Thursday",
  },
];

const initialState = {
  accounts: JSON.parse(localStorage.getItem("accountsArray")) || [],
  currentAccount: JSON.parse(localStorage.getItem("currentAccount")) || [],
  query: "",
  searchResults: null,
  selectedRecipeID: null,
  selectedRecipe: null,
  isLoading: false,
  activePage: 1,
  totalNumPages: null,
  resultsPerPage: 5,
  savedRecipes: JSON.parse(localStorage.getItem("savedRecipes")) || [],
  weeklyRecipes: JSON.parse(localStorage.getItem("savedWeeklyRecipes")) || [],
};

export function search(query) {
  if (!query) return;
  return async function fetchSearchResults(dispatch) {
    dispatch({ type: "search/startLoading" });
    try {
      const url = `${BASE_URL}?search=${query}&key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "search/saveSearchResults",
        payload: data.data.recipes,
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: "search/stopLoading" });
    }
  };
}

export function fetchRecipe(id, abortController) {
  if (!id) return;
  return async function fetchAndSaveRecipe(dispatch) {
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    dispatch({ type: "search/startLoading" });
    try {
      const url = `${BASE_URL}${id}`;
      const response = await fetch(url, {
        signal: abortController.current.signal,
      });
      const data = await response.json();
      dispatch({
        type: "search/displayRecipe",
        payload: data.data.recipe,
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    } finally {
      dispatch({ type: "search/stopLoading" });
      dispatch({ type: "search/clearSearchResults" });
    }
  };
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      state.query = action.payload;

      localStorage.setItem();
    },

    fakeLogin(state, action) {
      // make current account
      state.currentAccount = action.payload;

      // set data in LS
      state.savedRecipes = fakeSavedRecipes;
      state.weeklyRecipes = fakeWeeklyRecipes;

      localStorage.setItem(
        "currentAccount",
        JSON.stringify(state.currentAccount)
      );
      localStorage.setItem("savedRecipes", JSON.stringify(state.savedRecipes));
      localStorage.setItem(
        "savedWeeklyRecipes",
        JSON.stringify(state.weeklyRecipes)
      );
    },

    saveSearchResults(state, action) {
      state.searchResults = action.payload;
      state.totalNumPages = Math.ceil(
        action.payload.length / state.resultsPerPage
      );
      state.selectedRecipe = null;
      state.selectedRecipeID = null;
    },

    clearSearchResults(state) {
      state.searchResults = null;
      state.totalNumPages = null;
    },

    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    previousPage(state) {
      if (state.activePage > 1) state.activePage--;
    },

    nextPage(state) {
      if (state.activePage < state.totalNumPages) state.activePage++;
    },

    displayRecipe(state, action) {
      let newRecipeObj;
      const {
        image_url: imageUrl,
        ingredients,
        servings,
        title,
        id,
      } = action.payload;

      newRecipeObj = { imageUrl, id, ingredients, title, servings };

      state.selectedRecipe = newRecipeObj;
    },

    saveRecipe(state, action) {
      if (state.savedRecipes.map((r) => r.id).includes(action.payload.id))
        return;

      state.savedRecipes = [...state.savedRecipes, action.payload];
    },

    deleteRecipe(state, action) {
      state.savedRecipes = state.savedRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },

    addRecipeToWeeklyPlan: {
      prepare(recipe, weekday) {
        return { payload: { recipe, weekday } };
      },
      reducer(state, action) {
        const newMeal = {
          ...action.payload.recipe,
          weekday: action.payload.weekday,
        };
        state.weeklyRecipes = [...state.weeklyRecipes, newMeal];
      },
    },

    removeRecipeFromWeeklyPlan: {
      prepare(recipe, weekday) {
        return { payload: { recipe, weekday } };
      },
      reducer(state, action) {
        console.log(action.payload.weekday);

        state.weeklyRecipes = state.weeklyRecipes.filter(
          (recipe) => recipe.weekday !== action.payload.recipe.weekday
        );
      },
    },

    createAccount(state, action) {
      state.accounts.push(action.payload);
      state.currentAccount = action.payload;
    },

    login(state, action) {
      state.currentAccount = action.payload;
    },

    resetSearch(state) {
      state.searchResults = null;
      state.totalNumPages = null;
      state.selectedRecipe = null;
      state.selectedRecipeID = null;
    },
  },
});

export const {
  isLoading,
  searchResults,
  activePage,
  previousPage,
  nextPage,
  totalNumPages,
  resultsPerPage,
  selectRecipeID,
  selectedRecipe,
  displayRecipe,
  savedRecipes,
  saveRecipe,
  deleteRecipe,
  weeklyRecipes,
  addRecipeToWeeklyPlan,
  removeRecipeFromWeeklyPlan,
  createAccount,
  accounts,
  login,
  resetSearch,
  fakeLogin,
} = searchSlice.actions;

export default searchSlice.reducer;
