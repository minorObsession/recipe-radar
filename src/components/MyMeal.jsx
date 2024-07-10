import { useState } from "react";
import Button from "./Button";
import { weekdays } from "../helpers/config";

function MyMeal({ recipes, i }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const weekdaysPlanned = recipes.map((r) => r.weekday);
  const daysPlannedOrNot = weekdays.map((w) =>
    weekdaysPlanned.includes(w) ? true : false
  );

  return (
    // ! EACH DAY GRID
    <div
      className={`grid grid-cols-[2fr_3fr] grid-rows-[1fr_5fr] gap-2 bg-stone-600 p-2 rounded-xl `}
    >
      {/* // !  */}
      <div className="col-span-2 flex items-center md:gap-5 justify-between ">
        <h3
          className={`text-center col-span-2 ${
            daysPlannedOrNot[i] || "opacity-60"
          }`}
        >
          {weekdays[i]} {daysPlannedOrNot[i] && <span>&#x2713;</span>}
        </h3>
        {daysPlannedOrNot[i] && (
          <div className="flex gap-2">
            <Button onClick={() => {}} type="round">
              -
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
      {/* // ! conditionally show img if not collapsed */}
      {!isCollapsed && (
        <img
          src={recipes.find((r) => r.weekday === weekdays[i])?.imageUrl}
          className="col-[2_/1] text-center rounded-2xl self-center max-w-full h-auto max-h-48 min-h object-cover"
        ></img>
      )}
      {daysPlannedOrNot[i] ? (
        <div
          className={`flex flex-col gap-3 ${
            isCollapsed && "col-span-2 self-center"
          }`}
        >
          <h3 className="text-center ">{recipes.map((r) => r.title)}</h3>
          {/* // ! conditionally show div if not collapsed */}
          {!isCollapsed && (
            <div className="text-sm grid grid-cols-2 gap-1 text-center font-light">
              <span>protein:</span>
              <span>carbs:</span>
              <span>kcal:</span>
              <span>fat:</span>
            </div>
          )}
        </div>
      ) : (
        <span className="col-span-2 row-[2_/span_2] text-center self-center text-amber-500">{`Go to My Recipes and Plan ${weekdays[i]}'s meal`}</span>
      )}
    </div>
  );
}

export default MyMeal;
