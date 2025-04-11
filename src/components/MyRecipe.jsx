import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./Button";
import SmallSpinner from "./SmallSpinner";
import { deleteRecipe, addRecipeToWeeklyPlan } from "../features/searchSlice";
import { next7Days } from "../helpers/helperFunctions";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function MyRecipe({ recipe }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectExpanded, setIsSelectExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [selectedWeekday, setSelectedWeekday] = useState(next7Days());

  function handleDeleteRecipe() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(deleteRecipe(recipe));
      setIsLoading(false);
    }, 1000);
  }

  function handleAddToMeals() {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addRecipeToWeeklyPlan(recipe, selectedWeekday));
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="items-center justify-center grid grid-rows-[60px_5fr] grid-cols-1">
      <NavLink
        to={`/app/search/${recipe.id}`}
        className="text-center font-bold text-base lg:text-lg line-clamp-2 mb-2"
      >
        {recipe?.title}
      </NavLink>
      <div className="relative flex justify-center w-full h-full">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        )}
        <img
          src={recipe.imageUrl}
          className={`w-[clamp(200px,100%,500px)] h-[clamp(250px,30vw,400px)]
            object-cover text-center p-2 lg:p-5 opacity-65 rounded-3xl
            transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          onLoad={() => setImageLoaded(true)}
          alt={recipe.title}
        />
        {/* // ! upper overlay */}
        <div className="absolute top-4 lg:top-10 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
          <span className="text-xs sm:text-sm  italic whitespace-nowrap">
            Add to Meals
          </span>

          <select
            className={` bg-amber-900 italic  max-w-[8rem] text-sm p-1 rounded-full transition-all duration-700 `}
            onFocus={() => setIsSelectExpanded(true)}
            onBlur={() => setIsSelectExpanded(false)}
            value={selectedWeekday}
            onChange={(e) => setSelectedWeekday(e.target.value)}
          >
            <option value={next7Days(0)}>
              {next7Days(0, !isSelectExpanded)}
            </option>
            <option value={next7Days(1)}>
              {next7Days(1, !isSelectExpanded)}
            </option>
            <option value={next7Days(2)}>
              {next7Days(2, !isSelectExpanded)}
            </option>
            <option value={next7Days(3)}>
              {next7Days(3, !isSelectExpanded)}
            </option>
            <option value={next7Days(4)}>
              {next7Days(4, !isSelectExpanded)}
            </option>
            <option value={next7Days(5)}>
              {next7Days(5, !isSelectExpanded)}
            </option>
            <option value={next7Days(6)}>
              {next7Days(6, !isSelectExpanded)}
            </option>
          </select>
          <Button onClick={handleAddToMeals} type="round">
            {isLoading ? <SmallSpinner /> : "+"}
          </Button>
        </div>
        {/* // ! lower overlay */}
        <div className="absolute bottom-4 lg:bottom-10 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
          <span className="text-xs sm:text-sm  italic">
            Remove from my recipes{" "}
          </span>
          <Button
            onClick={handleDeleteRecipe}
            additionalClasses="text-2xl"
            type="round"
          >
            {isLoading ? <SmallSpinner /> : "-"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MyRecipe;
