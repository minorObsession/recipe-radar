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
  const [imageLoaded, setImageLoaded] = useState(false);
  const isInMyRecipes = savedRecipes
    ?.map((r) => r.id)
    .includes(selectedRecipe?.id);
  const { isLoading: isRecipeLoading } = useSelector((store) => store.search);

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

  // ! main div as container for image  (pos. relative).. background main color overflow-hidden!!
  // ! div inside that one - containing the spinner (pos. absolute) - rendered when !imageLoaded
  // ! img also inside main div (onLoad - set imageLoaded state to true)
  // ! img to have tranition opacity depending on imageLoaded

  return (
    <div className="sm:col-span-2 flex flex-col gap-2 lg:gap-5 lg:flex-row  items-center lg:items-start">
      {/* // ! IMAGE BOX */}
      <div className="relative w-full  rounded-lg overflow-hidden">
        {(isRecipeLoading || !imageLoaded) && (
          // ! MAYBE CAN REMOVE THE DIV AND JUST LEAVE LOADING SPINNER.. DOUBLE CHECK
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        <img
          className={`rounded-lg h-full w-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-80" : "opacity-0"
          }`}
          src={selectedRecipe?.imageUrl}
          alt={selectedRecipe?.title}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute right-3 bottom-2 lg:bottom-5 lg:right-4 flex items-center gap-2 justify-end m-2 bg-stone-500 rounded-lg p-2 min-w-[200px] min-h-[40px]">
          {!isRecipeLoading && (
            <>
              <span className="text-sm lg:text-base italic">
                {isInMyRecipes ? "Recipe saved \u2713" : "Add to my recipes"}
              </span>
              <Button
                onClick={isInMyRecipes ? handleDeleteRecipe : handleAddRecipe}
                type="round"
              >
                {isLoading ? <SmallSpinner /> : isInMyRecipes ? "-" : "+"}
              </Button>
            </>
          )}
        </div>
      </div>
      <Ingredients />
    </div>
  );
});

export default RecipePreview;
