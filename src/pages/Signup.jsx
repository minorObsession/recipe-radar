import { useDispatch } from "react-redux";
import Button from "../components/Button";
// import {
//   boxBackgroundClass,
//   inlineInputClassNames,
//   inputClassNames,
//   titleClassNames,
// } from "../helpers/classNames";
import { useEffect, useState } from "react";
import { createAccount } from "../features/searchSlice";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../helpers/useLocalStorage";
import SmallSpinner from "../components/SmallSpinner";
import { useNavigate } from "react-router-dom";

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

const foodCategories = [
  "vegan",
  "vegetarian",
  "low-calorie",
  "high-protein",
  "gluten-free",
];

function Signup() {
  const { accounts } = useSelector((store) => store.search);
  const [accountsArray, setAccountsArray] = useLocalStorage(
    accounts,
    "accountsArray"
  );
  console.log(accountsArray);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [dietPreferences, setDietPreferences] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAccountsArray(accounts);
  }, [accounts, setAccountsArray]);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const newAccount = {
      name,
      username: name.split(" ")[0].toLowerCase(),
      password,
      dietPreferences,
    };

    setIsLoading(true);

    setTimeout(() => {
      if (newAccount.name.length < 1 || !newAccount.password) {
        alert("Please fill in all required fields to sign up");
        setIsLoading(false);
        return;
      }

      if (accounts?.map((acc) => acc.username).includes(newAccount.username)) {
        alert(
          "You already have an account with us, silly! You'll be transferred to the login page in a few seconds"
        );
        setTimeout(() => navigate("/login"), 1000);
      } else {
        dispatch(createAccount(newAccount));
        setTimeout(() => {
          setIsLoading(false);
          alert(
            "Hooray! Welcome to your new favorite diet! You'll be logged in in a few seconds"
          );
          setTimeout(() => navigate("/app"), 1000);
        }, 1000);
      }
    }, 1000);
  }

  function handleSelectDietCategory(e) {
    e.preventDefault();
    const clickedCategory = e.target.value;

    if (dietPreferences.includes(clickedCategory)) {
      setDietPreferences((preferencesArr) =>
        preferencesArr.filter((p) => p !== clickedCategory)
      );
    } else {
      setDietPreferences((preferencesArr) => [
        ...preferencesArr,
        clickedCategory,
      ]);
    }
  }

  return (
    <div className="flex max-w-[95svw] lg:max-w-[70svw] mx-auto justify-center p-4 lg:p-6  ">
      <form
        onSubmit={handleSubmit}
        className={`box-background w-full p-3 lg:p-5 flex flex-col gap-3 lg:g-5 items-center  `}
      >
        {/* Title */}
        <h2 className="text-sm md:text-lg lg:text-xl text-center col-span-2">
          Your Information and Food Preferences
        </h2>

        <p className={`title-text`}>Name</p>
        <div className="w-[70%]">
          {/* Name */}
          <input
            className={`input-base `}
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <p className={`title-text`}>Password</p>
        <div className="relative flex items-center w-[70%] ">
          <input
            className={`input-base `}
            type={passwordVisible ? "text" : "password"}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="absolute right-2 px-3 text-xs md:text-sm opacity-80"
            onClick={(e) => {
              e.preventDefault();
              setPasswordVisible((prev) => !prev);
            }}
          >
            {passwordVisible ? "hide" : "show"}
          </button>
        </div>

        {/* Address Section */}
        <p className={`title-text row-span-3`}>Street Address</p>
        {/* <span className="">Street Address</span> */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-4 w-[70%]">
          {/* Street Address */}
          <div className="flex flex-col ">
            <input
              className={`input-base `}
              type="text"
              placeholder="e.g. 123 Main St"
            />
          </div>

          {/* State Dropdown + zip*/}
          <div className="grid grid-cols-2 gap-y-2 grid-rows-[1fr_3fr] w-full">
            <span className="text-xs text-center">State</span>
            <span className="text-xs text-center">Zip Code</span>
            <select className={`inline-input m-0 h-7 w-20 lg:w-auto`}>
              {states.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
            <input
              className={`inline-input m-0 h-7`}
              type="number"
              placeholder="Zip code"
            />
          </div>
        </div>

        {/* Zip Code */}
        <div className="flex flex-col"></div>

        {/* Diet Preferences */}
        <p className={`title-text`}>My Diet</p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {foodCategories.map((category) => (
            <Button
              key={category}
              type="small"
              value={category}
              onClick={handleSelectDietCategory}
              clicked={dietPreferences.includes(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center col-span-2 mt-5">
          <Button onClick={handleSubmit} additionalClasses="w-1/2">
            {isLoading ? <SmallSpinner /> : "CREATE MEAL PLAN"}
          </Button>
        </div>
      </form>
    </div>
  );

  // return (
  //   <div className=" flex justify-center p-2 lg:p-5 overflow-y-scroll ">
  //     <form
  //       onSubmit={handleSubmit}
  //       className={` p-2 lg:p-4 flex gap-1 justify-center flex-col md:grid md:grid-cols-[1fr_3fr] items-center  ${boxBackgroundClass}`}
  //     >
  //       <h2 className="text-base md:text-lg whitespace-pre-wrap lg:text-xl  text-center col-span-2 row-[1_/span_2]">
  //         Your information and food preferences
  //       </h2>

  //       <p className={`${titleClassNames}  text-center `}>Name</p>
  //       <input
  //         className={`${inputClassNames} `}
  //         type="text"
  //         placeholder="your full name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         required
  //       />

  //       <p className={`${titleClassNames} text-center`}>Password</p>
  //       <div className="w-full relative flex items-center">
  //         <input
  //           className={`${inputClassNames} z-10 `}
  //           placeholder="your password"
  //           type={passwordVisible ? "text" : "password"}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //         <button
  //           className="absolute right-0  px-3 z-20 text-xs md:text-sm transition-all duration-700 opacity-80"
  //           onClick={(e) => {
  //             e.preventDefault();
  //             setPasswordVisible((s) => !s);
  //           }}
  //         >
  //           {passwordVisible ? "hide" : "show"}
  //         </button>
  //       </div>
  //       <p className={`row-span-2 ${titleClassNames}`}>Address</p>

  //       <div className="w-full text-xs row-span-2 flex flex-col md:flex-row md:gap-4 lg:gap-14 items-center">
  //         <div className="flex flex-col gap-2">
  //           <span>Street address</span>
  //           <input
  //             className={`w-full ${inputClassNames}`}
  //             type="text"
  //             placeholder="e.g. 123 Main street"
  //           />
  //         </div>

  //         <div className="flex flex-col gap-2">
  //           <span>State</span>
  //           <select className="bg-stone-500 py-2 px-3 rounded-lg max-w-20 lg:max-w-32 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-1">
  //             {states.map((state) => (
  //               <option key={state}>{state}</option>
  //             ))}
  //           </select>
  //         </div>
  //         <div className="flex flex-col gap-2">
  //           <span>Zip code</span>
  //           <input
  //             className={`max-w-32 lg:max-w-48 ${inputClassNames}`}
  //             type="number"
  //             placeholder="Zip code"
  //           />
  //         </div>
  //       </div>

  //       <p className={`${titleClassNames} `}>My diet</p>
  //       {/* // !  categories */}
  //       <div className="">
  //         {foodCategories.map((category) => (
  //           <Button
  //             key={category}
  //             type="small"
  //             value={category}
  //             onClick={handleSelectDietCategory}
  //             clicked={dietPreferences.includes(category)}
  //             // additionalClasses={dietPreferences.includes(
  //             //   category ? " bg-amber-900" : ""
  //             // )}
  //           >
  //             {category}
  //           </Button>
  //         ))}
  //       </div>
  //       {/* // ! submit */}
  //       <div className="flex justify-center col-span-2">
  //         <Button onClick={handleSubmit} additionalClasses=" mt-5 w-1/2">
  //           {isLoading ? <SmallSpinner /> : "CREATE MEAL PLAN"}
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default Signup;
