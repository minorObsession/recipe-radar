import Button from "../components/Button";
import {
  boxBackgroundClass,
  inputClassNames,
  titleClassNames,
} from "../helpers/classNames";

const states = [
  "--",
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

function Signup() {
  return (
    <div className="flex justify-center mt-14 lg:mt-10">
      <form
        onSubmit={handleSubmit}
        className={`max-h-[85vh] w-[90vw] lg:w-[75vw] py-8 px-10 grid grid-cols-[1fr_3fr] grid-rows-5 items-center gap-y-5 lg:gap-y-8 ${boxBackgroundClass}`}
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
        {/* // ! address div  */}
        <div className="row-span-2 flex gap-5 lg:gap-14 items-center">
          <div className="flex flex-col gap-2">
            <span>Street address</span>
            <input
              className={`w-full ${inputClassNames}`}
              type="text"
              placeholder="e.g. 123 Main street"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span>State</span>
            <select className="bg-stone-500 py-2 px-3 rounded-lg max-w-20 lg:max-w-32 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-1">
              {states.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span>Zip code</span>
            <input
              className={`max-w-32 lg:max-w-48 ${inputClassNames}`}
              type="number"
              placeholder="Zip code"
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
    </div>
  );
}

export default Signup;
