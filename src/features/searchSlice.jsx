import { createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../helpers/config";

const initialState = {
  accounts: JSON.parse(localStorage.getItem("accountsArray")) || [],
  currentAccount: null,
  query: "",
  searchResults: null,
  selectedRecipeID: null,
  selectedRecipe: null,
  isLoading: false,
  activePage: 1,
  totalNumPages: null,
  resultsPerPage: 8,
  savedRecipes: JSON.parse(localStorage.getItem("savedRecipes")) || [],
  weeklyRecipes: JSON.parse(localStorage.getItem("savedWeeklyRecipes")) || [],
};
export function search(query, abortController) {
  if (!query) return;
  return async function fetchSearchResults(dispatch) {
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    dispatch({ type: "search/startSearching" });
    try {
      const url = `${BASE_URL}?search=${query}&key=${API_KEY}`;
      const response = await fetch(url, {
        signal: abortController.current.signal,
      });
      const data = await response.json();
      dispatch({
        type: "search/saveSearchResults",
        payload: data.data.recipes,
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    } finally {
      dispatch({ type: "search/stopSearching" });
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
    dispatch({ type: "search/startSearching" });
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
      dispatch({ type: "search/stopSearching" });
    }
  };
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action) {
      state.query = action.payload;

      // fetchSearchResults(state.query);
    },

    saveSearchResults(state, action) {
      state.searchResults = action.payload;
      state.totalNumPages = Math.ceil(
        action.payload.length / state.resultsPerPage
      );
    },

    startSearching(state) {
      state.isLoading = true;
    },

    stopSearching(state) {
      state.isLoading = false;
    },

    previousPage(state) {
      if (state.activePage > 1) state.activePage--;
    },

    nextPage(state) {
      if (state.activePage < state.totalNumPages) state.activePage++;
    },

    selectRecipeID(state, action) {
      state.selectedRecipeID = action.payload;
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

    addMeal: {
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

    createAccount(state, action) {
      state.accounts.push(action.payload);
      state.currentAccount = action.payload;
    },

    login(state, action) {
      state.currentAccount = action.payload;
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
  addMeal,
  createAccount,
  accounts,
  login,
} = searchSlice.actions;

export default searchSlice.reducer;
