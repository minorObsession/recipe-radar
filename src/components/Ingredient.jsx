import { decimalToFraction } from "../helpers/helperFunctions";

function Ingredient({ ingredient, numServings }) {
  return (
    <div className=" lg:text-lg flex gap-2 text-amber-300 ">
      <span>-</span>
      <span>{decimalToFraction((ingredient.quantity / 4) * numServings)}</span>
      <span> {ingredient.unit} </span>
      <span className="">{ingredient.description}</span>
    </div>
  );
}

export default Ingredient;
