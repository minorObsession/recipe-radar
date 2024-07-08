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

  useEffect(() => {
    setStoredRecipes(savedRecipes);
  }, [savedRecipes, storedRecipes, setStoredRecipes]);

  return (
    <div className={`${bigBox}`}>
      <h2 className={`${bigBoxTitle}`}>
        Saved Recipes
        <input
          value={savedRecipes.length}
          disabled
          className={inlineInputClassNames}
        ></input>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        {savedRecipes.map((recipe) => (
          <MyRecipe recipe={recipe} key={recipe.id}></MyRecipe>
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default MyRecipes;
