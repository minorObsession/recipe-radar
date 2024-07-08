import {
  bigBox,
  boxBackgroundClass,
  inputClassNames,
  titleClassNames,
} from "../helpers/classNames";
import Button from "./Button";

function AddToMealsForm() {
  return (
    <form
      // onSubmit={}
      className={`w-[200px] h-[200px] py-8 px-10 grid grid-cols-[1fr_3fr] grid-rows-5 items-center gap-y-5 lg:gap-y-8 ${boxBackgroundClass}`}
    >
      <h2 className="text-2xl lg:text-3xl  col-span-2 row-[1_/span_2]">
        Your information and preferences
      </h2>

      <p className={titleClassNames}>Name</p>
      <input
        className={inputClassNames}
        type="text"
        placeholder="your full name"
      />

      <p className={titleClassNames}>Email</p>
      <input
        className={inputClassNames}
        type="email"
        placeholder="your email"
      />

      <p className={`row-span-2 ${titleClassNames}`}>Address</p>
      <div className="row-span-2 flex gap-5 lg:gap-14 items-center">
        <div className="flex flex-col gap-2">
          <span>Street address</span>
          <input
            className={`w-full ${inputClassNames}`}
            type="text"
            placeholder="e.g. 123 Main street"
          />
        </div>
      </div>

      <p className={titleClassNames}>My diet</p>
      <div className="">
        <Button type="small">vegetarian</Button>
        <Button type="small">vegan</Button>
        <Button type="small">low-calorie</Button>
        <Button type="small">high-protein</Button>
        <Button type="small">gluten-free</Button>
      </div>

      <div className="flex justify-center col-span-2">
        <Button additionalClasses=" mt-5 w-1/2">CREATE MEAL PLAN</Button>
      </div>
    </form>
  );
}

export default AddToMealsForm;
