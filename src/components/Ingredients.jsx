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

  // h-[clamp(200px,100%,400px)]
  // lg:h-[clamp(200px,100%,600px)]
  return (
    <article className=" w-full h-full grid grid-cols-2 items-start gap-2  rounded-lg bg-stone-500 p-3 ">
      <header className="col-[1/_span_2] flex items-center justify-center gap-3 bg-stone-600 w-full rounded-lg text-base lg:text-lg p-1 lg:p-2 ">
        <span className="p-2">servings:</span>
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
      </header>
      {selectedRecipe.ingredients.map((ing, i) => (
        <Ingredient
          numServings={numServings}
          ingredient={ing}
          key={ing.description + i}
        />
      ))}
    </article>
  );
}

export default Ingredients;
