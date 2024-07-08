import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BASE_URL, API_KEY } from "./helpers/config";
import Nav from "./Nav";
import Homepage from "./pages/Homepage";
import MealPlanning from "./pages/MealPlanning";
import MyRecipes from "./pages/MyRecipes";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Search from "./pages/Search";
import RecipePreview from "./components/RecipePreview";
import AddToMealsForm from "./components/AddToMealsForm";

// ! IDEAS:

// *

function App() {
  // // ! forkify search
  // async function fetchSearchResults() {
  //   try {
  //     const url = `${BASE_URL}?search=avocado&key=${API_KEY}`;
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // fetchSearchResults();
  // ! USE THIS ONE

  // const url = 'https://low-carb-recipes.p.rapidapi.com/search?name=cake&tags=keto%3Bdairy-free&includeIngredients=egg%3Bbutter&excludeIngredients=cinnamon&maxPrepareTime=10&maxCookTime=20&maxCalories=500&maxNetCarbs=5&maxSugar=3&maxAddedSugar=0&limit=10';
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'x-rapidapi-key': '893e44af78mshc99a48c8403004bp153194jsnf7008dc005f0',
  // 		'x-rapidapi-host': 'low-carb-recipes.p.rapidapi.com'
  // 	}
  // };

  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }

  // ! ----------------

  //   async function () {

  //   const url = 'https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'x-rapidapi-key': '893e44af78mshc99a48c8403004bp153194jsnf7008dc005f0',
  //       'x-rapidapi-host': 'mycookbook-io1.p.rapidapi.com',
  //       'Content-Type': 'text/plain'
  //     },
  //     body: 'https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/'
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }

  // }

  // ! ----------------

  // ! fetch recipe
  // async function fetchRecipe(id) {
  //   try {
  //     // https://forkify-api.herokuapp.com/api/v2/recipes/:id
  //     // ! forkifyAPI
  //     // const url = `${BASE_URL}${id}`;
  //     // ! open food facts
  //     // const url = "https://world.openfoodfacts.org/api/v3/product/search=pizza";
  //     // ! spoonacular - limited
  //     // const url =
  //     //   "https://api.spoonacular.com/recipes/complexSearch?query=pasta&minProtein=20&apiKey=9e6ea8ee7625407faded6dd0cfaf3d54";
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // fetchRecipe("664c8f193e7aa067e94e881d");

  // return (
  //   <div>
  //     {/* <Nav /> */}
  //     <Homepage />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="search" />} />
          <Route path="search" element={<Search />}>
            <Route path=":id" element={<RecipePreview />}></Route>
          </Route>
          <Route path="my-recipes" element={<MyRecipes />}>
            <Route path="form" element={<AddToMealsForm />}></Route>
          </Route>
          <Route path="meal-planning" element={<MealPlanning />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
