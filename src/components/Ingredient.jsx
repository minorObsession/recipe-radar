import { decimalToFraction } from "../helpers/helperFunctions";

function Ingredient({ ingredient, numServings }) {
  return (
    <div className="text-sm md:text-base flex gap-2 text-amber-300 ">
      <span>- </span>
      <div>
        <span>
          {decimalToFraction((ingredient.quantity / 4) * numServings)}
        </span>
        <span> {ingredient.unit} </span>
        <span className="">{ingredient.description}</span>
      </div>
    </div>
  );
}

export default Ingredient;
