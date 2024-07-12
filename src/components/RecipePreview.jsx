import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";

import Button from "./Button";
import Ingredients from "./Ingredients";
import { saveRecipe, deleteRecipe, fetchRecipe } from "../features/searchSlice";
import SmallSpinner from "./SmallSpinner";
import { useParams } from "react-router-dom";

const RecipePreview = memo(function RecipePreview() {
  const { selectedRecipe, savedRecipes } = useSelector((store) => store.search);
  const { id } = useParams();
  const dispatch = useDispatch();

  const isInMyRecipes = savedRecipes
    ?.map((r) => r.id)
    .includes(selectedRecipe?.id);

  const [isLoading, setIsLoading] = useState(false);

  // Fetch recipe based on URL on mount
  useEffect(() => {
    if (!id) return;
    const abortController = new AbortController();
    dispatch(fetchRecipe(id, abortController));
    return () => abortController.abort();
  }, [id, dispatch]);

  function handleAddRecipe() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(saveRecipe(selectedRecipe));
      setIsLoading(false);
    }, 1000);
  }

  function handleDeleteRecipe() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(deleteRecipe(selectedRecipe));
      setIsLoading(false);
    }, 1000);
  }

  if (!selectedRecipe) return null;

  return (
    <div className="lg:flex justify-center lg:justify-between lg:gap-10 mt-5 lg:mt-8 ">
      <div className="flex flex-col gap-2 lg:flex-row  items-center lg:items-start">
        <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
          <img
            className="rounded-lg opacity-80 h-full w-full object-cover"
            src={selectedRecipe.imageUrl}
            alt={selectedRecipe.title}
          />
          <div className="absolute right-0 bottom-0 max-h-10 lg:bottom-2 flex items-center gap-2 justify-end m-2 bg-stone-500 rounded-lg p-2">
            <span className="text-sm lg:text-base italic">
              {isInMyRecipes ? "Recipe saved \u2713" : "Add to my recipes"}
            </span>
            <Button
              onClick={isInMyRecipes ? handleDeleteRecipe : handleAddRecipe}
              type="round"
            >
              {isLoading ? <SmallSpinner /> : isInMyRecipes ? "-" : "+"}
            </Button>
          </div>
        </div>
        <Ingredients />
      </div>
    </div>
  );
});

export default RecipePreview;
