import { useSelector } from "react-redux";
import Ingredient from "./Ingredient";
import Button from "./Button";
import { useState } from "react";

function Ingredients() {
  const { selectedRecipe } = useSelector((store) => store.search);
  const [numServings, setNumServings] = useState(+selectedRecipe.servings);

  function increaseServings() {
    setNumServings((s) => ++s);
  }

  function decreaseServings() {
    setNumServings((s) => (s > 1 ? --s : s));
  }

  return (
    <div className=" w-full h-full grid grid-cols-2 items-start gap-6  rounded-lg bg-stone-500 p-3 ">
      <div className="col-[1/_span_2] flex lg:flex-grow lg:w-full items-center justify-center gap-3 bg-stone-600 w-full rounded-lg text-base p-1 lg:p-2 ">
        <span>servings:</span>
        <Button
          type="round"
          // disabled={numServings === 1}
          onClick={decreaseServings}
        >
          -
        </Button>
        <span>{numServings}</span>
        <Button type="round" onClick={increaseServings}>
          +
        </Button>
      </div>
      {selectedRecipe.ingredients.map((ing, i) => (
        <Ingredient
          numServings={numServings}
          ingredient={ing}
          key={ing.description + i}
        />
      ))}
    </div>
  );
}

export default Ingredients;
