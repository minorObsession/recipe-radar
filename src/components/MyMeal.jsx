import { useState } from "react";
import Button from "./Button";
import { weekdays } from "../helpers/config";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeRecipeFromWeeklyPlan } from "../features/searchSlice";
import SmallSpinner from "./SmallSpinner";
import LoadingSpinner from "./CenteredLoadingSpinner";

function MyMeal({ recipes, i }) {
  const { weeklyRecipes } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const weekdaysPlanned = recipes.map((r) => r.weekday);
  const daysPlannedOrNot = weekdays.map((w) =>
    weekdaysPlanned.includes(w) ? true : false
  );

  const currDayRecipe = recipes.find((r) => r.weekday === weekdays[i]);

  function handleRemoveRecipe() {
    const recipeToDelete = weeklyRecipes.find((r) => r === currDayRecipe);
    setIsLoading(true);
    setTimeout(() => {
      dispatch(removeRecipeFromWeeklyPlan(recipeToDelete));
      setIsLoading(false);
    }, 1000);
  }

  const protein = Math.ceil(Math.random() * 30 + 10); // 10–40g
  const carbs = Math.ceil(Math.random() * 60 + 20); // 20–80g
  const fat = Math.ceil(Math.random() * 25 + 5); // 5–30g
  const kcal = Math.ceil(protein * 4 + carbs * 4 + fat * 9);

  return (
    // ! EACH DAY GRID
    <article
      className={`relative h-fit sm:h-[350px] grid grid-cols-2 grid-rows-[3rem_fit-content_1fr_1fr] sm:grid-rows-[3rem_4rem_1fr_1fr] gap-2 bg-stone-600 p-2 rounded-xl `}
    >
      {/* // ! DAY OF THE WEEK + CIONS  */}
      <div className="col-span-2 flex items-center md:gap-5 justify-between">
        <h3
          className={`text-center col-span-2 ${
            daysPlannedOrNot[i] || "opacity-60"
          }`}
        >
          {weekdays[i]} {daysPlannedOrNot[i] && <span>&#x2713;</span>}
        </h3>
        {daysPlannedOrNot[i] && (
          <div className="flex gap-2">
            <Button onClick={handleRemoveRecipe} type="round">
              {isLoading ? <SmallSpinner /> : "-"}
            </Button>
            <Button
              isCollapsed={isCollapsed}
              onClick={() => setIsCollapsed((s) => !s)}
              type="collapsingArrow"
            >
              <span>&#9660;</span>
            </Button>
          </div>
        )}
      </div>
      <NavLink
        to={`/app/search/${currDayRecipe?.id}`}
        className="text-center col-span-2 "
      >
        {currDayRecipe?.title}
      </NavLink>
      {/* // ! IMAGE BOX */}
      <div className=" col-span-2 h-[150px] w-full relative flex items-center justify-center overflow-hidden">
        {currDayRecipe && !imageLoaded && <LoadingSpinner />}
        {/* // ! conditionally show img if not collapsed */}
        {!isCollapsed && currDayRecipe?.imageUrl && (
          <img
            src={currDayRecipe?.imageUrl}
            className={`rounded-2xl self-center w-[clamp(200px,100%,300px)] h-[clamp(100px,100%,150px)] object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-80" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            alt={currDayRecipe?.title}
          />
        )}
      </div>

      {daysPlannedOrNot[i] ? (
        <div
          className={`flex row-[4/5] col-span-2 flex-col gap-3 justify-around ${
            isCollapsed && "col-span-2 self-center"
          }`}
        >
          {/* // ! conditionally show div if not collapsed */}
          {!isCollapsed && (
            <div className=" text-sm grid grid-cols-2 gap-1 text-center font-light">
              <span>protein: {protein}g</span>
              <span>carbs: {carbs}g</span>
              <span>kcal: {kcal}</span>
              <span>fat: {fat}g</span>
            </div>
          )}
        </div>
      ) : (
        <span className="absolute inset-0 text-center self-center text-amber-500">{`Go to My Recipes and Plan ${weekdays[i]}'s meal`}</span>
      )}
    </article>
  );
}

export default MyMeal;
