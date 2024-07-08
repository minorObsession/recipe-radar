import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";

import Button from "./Button";
import Ingredients from "./Ingredients";
import { saveRecipe, deleteRecipe } from "../features/searchSlice";
import SmallSpinner from "./SmallSpinner";

const RecipePreview = memo(function RecipePreview() {
  const { selectedRecipe, savedRecipes } = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const isInMyRecipes = savedRecipes
    ?.map((r) => r.id)
    .includes(selectedRecipe?.id);

  const [isLoading, setIsLoading] = useState(false);

  function handleAddRecipe() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(saveRecipe(selectedRecipe));
      // setIsInMyRecipes(true);
      setIsLoading(false);
    }, 1000);
  }
  function handleDeleteRecipe() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(deleteRecipe(selectedRecipe));
      // setIsInMyRecipes(false);
      setIsLoading(false);
    }, 1000);
  }

  if (!selectedRecipe) return null;

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:gap-10 mt-5 lg:mt-8 ">
      <div className="flex items-start justify-center">
        <div className="relative overflow-hidden">
          <img
            className="w-[400px] h-[300px] lg:w-[400px] lg:min-w-[400px] lg:h-[400px] lg:min-h-[400px] object-cover opacity-70 rounded-lg"
            src={selectedRecipe.imageUrl}
          ></img>
          <div className="absolute right-0 bottom-0 lg:bottom-2 flex items-center gap-2 justify-end m-2 bg-stone-500 rounded-lg p-2 ">
            <span className="text-sm lg:text-base italic">
              {isInMyRecipes ? "Recipe saved" : "Add to my recipes"}
            </span>
            <Button
              onClick={isInMyRecipes ? handleDeleteRecipe : handleAddRecipe}
              type="round"
            >
              {isLoading ? <SmallSpinner /> : isInMyRecipes ? "-" : "+"}
            </Button>
          </div>
        </div>
      </div>

      <Ingredients />
    </div>
  );
});

export default RecipePreview;
