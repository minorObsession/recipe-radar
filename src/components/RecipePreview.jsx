import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import LoadingSpinner from "./CenteredLoadingSpinner";
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
  const { isLoading: isRecipeLoading } = useSelector((store) => store.search);

  const [isLoading, setIsLoading] = useState(false);

  // ! FIX THIS
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
    <div className="sm:col-span-2 flex flex-col gap-2 lg:gap-5 lg:flex-row  items-center lg:items-start">
      {/* // ! IMAGE BOX */}
      <div className="relative h-[clamp(200px,100%,400px)] lg:h-[clamp(200px,100%,600px)] w-[clamp(300px,100%,1000px)]">
        {isRecipeLoading && <LoadingSpinner />}
        <img
          className="rounded-lg opacity-80 h-full w-full object-cover"
          src={selectedRecipe.imageUrl}
          alt={selectedRecipe.title}
        />
        <div className="absolute right-3 bottom-2  lg:bottom-5 lg:right-4 flex items-center gap-2 justify-end m-2 bg-stone-500 rounded-lg p-2">
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
    // </article>
  );
});

export default RecipePreview;
