import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "./Button";
import SmallSpinner from "./SmallSpinner";
import { deleteRecipe, addRecipeToWeeklyPlan } from "../features/searchSlice";
import { next7Days } from "../helpers/helperFunctions";
import { NavLink } from "react-router-dom";
import LoadingSpinner from "./CenteredLoadingSpinner";
import ImageOverlay from "./ImageOverlay";

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
    <article
      className="items-center justify-center grid grid-rows-[60px_5fr] grid-cols-1 rounded-xl p-3 drop-shadow-sm shadow-md shadow-current"
      style={{ boxShadow: "1px 1px 2px" }}
    >
      <NavLink
        to={`/app/search/${recipe.id}`}
        className="text-center font-bold text-base lg:text-lg line-clamp-2 mb-2"
      >
        {recipe?.title}
      </NavLink>
      <div className="relative p-2 flex justify-center w-full h-full">
        {/* // ! loading spinner if not yet loaded */}
        {!imageLoaded && <LoadingSpinner />}
        <img
          src={recipe.imageUrl}
          className={`w-[clamp(200px,100%,500px)] h-[clamp(250px,30svw,400px)]
            object-cover text-center  rounded-3xl  shadow-amber-300  shadow-md
            transition-opacity duration-300 ${
              imageLoaded ? "opacity-80" : "opacity-0"
            }`}
          onLoad={() => setImageLoaded(true)}
          alt={recipe.title}
          style={{ boxShadow: "2px 2px 8px" }}
        />
        {/* // ! upper overlay */}
        <ImageOverlay position="top">
          <span className="text-xs sm:text-sm  italic whitespace-nowrap">
            Add to Meals
          </span>

          <select
            className={`bg-amber-900 italic  max-w-[8rem] text-sm p-1 rounded-full transition-all duration-200  `}
            onFocus={() => setIsSelectExpanded(true)}
            onBlur={() => setIsSelectExpanded(false)}
            onMouseLeave={() => setIsSelectExpanded(false)}
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
        </ImageOverlay>
        {/* // ! lower overlay */}
        <ImageOverlay position="bottom">
          <span className="text-xs sm:text-sm italic">
            Remove from my recipes
          </span>
          <Button
            onClick={handleDeleteRecipe}
            additionalClasses="text-2xl"
            type="round"
          >
            {isLoading ? <SmallSpinner /> : "-"}
          </Button>
        </ImageOverlay>
      </div>
    </article>
  );
}

export default MyRecipe;
