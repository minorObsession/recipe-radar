import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import MealPlanning from "./pages/MealPlanning";
import MyRecipes from "./pages/MyRecipes";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Search from "./pages/Search";
import RecipePreview from "./components/RecipePreview";

// ! IDEAS - TO DO:

// * MOBILE: upon click on recipe autofocus brings up the phone keyboard (undesired autofous!!)]
// * INSTEAD TO DO THAT WHEN CLICKED ON SEARCH!! NOT WHEN SEARCH PAGE IS ACTIVE

// ! add borders overall
// ! add box-shadows overall

// ! need some alert that recipe was saved successfully or sent to meals sccessfully

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="search" />} />
          <Route path="search" element={<Search />}>
            <Route path=":id" element={<RecipePreview />} />
          </Route>
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="meal-planning" element={<MealPlanning />} />
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
