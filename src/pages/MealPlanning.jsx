import { useEffect } from "react";
import MyMeal from "../components/MyMeal";

import { weekdays } from "../helpers/config";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../helpers/useLocalStorage";

function MealPlanning() {
  const { weeklyRecipes } = useSelector((store) => store.search);

  const [savedWeeklyRecipes, setSavedWeeklyRecipes] = useLocalStorage(
    weeklyRecipes,
    "savedWeeklyRecipes"
  );

  // ! prevent infinite loop situation

  useEffect(() => {
    setSavedWeeklyRecipes(weeklyRecipes);
    // ! THINK ABOUT THE DEPENDENCY ARRAY - remove savedWeeklyRecipes
  }, [weeklyRecipes, setSavedWeeklyRecipes]); // savedWeeklyRecipes,

  return (
    <>
      <section className={`big-box `}>
        <div className={`box-title p-4`}>My weekly meal plan</div>
        <div className="w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:p-2 lg:px-6 ">
          {weekdays.map((_, i) => (
            <MyMeal key={i} recipes={weeklyRecipes} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MealPlanning;
