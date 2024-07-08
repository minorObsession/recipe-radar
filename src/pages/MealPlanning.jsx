import { useEffect } from "react";
import MyMeal from "../components/MyMeal";
import {
  bigBox,
  bigBoxTitle,
  inlineInputClassNames,
} from "../helpers/classNames";
import { weekdays } from "../helpers/config";
import { next7Days } from "../helpers/helperFunctions";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../helpers/useLocalStorage";

function MealPlanning() {
  const { weeklyRecipes } = useSelector((store) => store.search);

  const [savedWeeklyRecipes, setSavedWeeklyRecipes] = useLocalStorage(
    weeklyRecipes,
    "savedWeeklyRecipes"
  );

  useEffect(() => {
    setSavedWeeklyRecipes(weeklyRecipes);
  }, [weeklyRecipes, savedWeeklyRecipes, setSavedWeeklyRecipes]);

  return (
    <>
      <div className={`${bigBox} `}>
        <div className={`${bigBoxTitle} p-4`}>My weekly meal plan</div>
        <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 gap-5 px-6 ">
          {weekdays.map((_, i) => (
            <MyMeal key={i} recipes={weeklyRecipes} i={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MealPlanning;
