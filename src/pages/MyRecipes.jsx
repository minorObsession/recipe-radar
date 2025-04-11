import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import MyRecipe from "../components/MyRecipe";
import {
  bigBox,
  bigBoxTitle,
  inlineInputClassNames,
} from "../helpers/classNames";
import { useLocalStorage } from "../helpers/useLocalStorage";

// ! TO DO:
// * implement hover over dish title to show ingredients

function MyRecipes() {
  const { savedRecipes } = useSelector((store) => store.search);

  const [storedRecipes, setStoredRecipes] = useLocalStorage(
    savedRecipes,
    "savedRecipes"
  );

  // ! THINK ABOUT THE DEPENDENCY ARRAY - remove savedWeeklyRecipes

  // ! test how the app works
  useEffect(() => {
    setStoredRecipes(savedRecipes);
  }, [savedRecipes, setStoredRecipes]);

  return (
    <section className={`big-box`}>
      <h2 className={`box-title `}>
        Saved Recipes
        {/* // ! self-close input */}
        <input
          value={savedRecipes.length}
          disabled
          className={inlineInputClassNames}
        />
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-full sm:p-2 lg:px-6">
        {savedRecipes.map((recipe) => (
          <MyRecipe recipe={recipe} key={recipe.id} />
        ))}
        <Outlet />
      </div>
    </section>
  );
}

export default MyRecipes;
