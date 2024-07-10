import { useDispatch } from "react-redux";
import Button from "../components/Button";
import {
  boxBackgroundClass,
  inputClassNames,
  titleClassNames,
} from "../helpers/classNames";
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
    <div className="flex justify-center overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className={`max-h-full w-full md:max-w-[90vw] lg:w-[75vw] h-[full] md:max-h-[90vh] lg:max-h-[90vh] p-4 md:p-10 grid grid-cols-[1fr_3fr] grid-rows-5 items-center md:gap-y-5 lg:gap-y-10 ${boxBackgroundClass}`}
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl  text-center col-span-2 row-[1_/span_2]">
          Your information and food preferences
        </h2>

        <p className={titleClassNames}>Name</p>
        <input
          className={inputClassNames}
          type="text"
          placeholder="your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <p className={titleClassNames}>Password</p>
        <div className="relative flex items-center">
          <input
            className={`${inputClassNames} z-10 `}
            placeholder="your password"
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="absolute right-12 md:right-36 lg:right-64 px-3 z-20 text-xs md:text-sm transition-all duration-700 opacity-80"
            onClick={(e) => {
              e.preventDefault();
              setPasswordVisible((s) => !s);
            }}
          >
            {passwordVisible ? "hide" : "show"}
          </button>
        </div>
        <p className={`row-span-2 ${titleClassNames}`}>Address</p>

        <div className="text-xs row-span-2 flex gap-5 lg:gap-14 items-center">
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
          {foodCategories.map((category) => (
            <Button
              key={category}
              type="small"
              value={category}
              onClick={handleSelectDietCategory}
              clicked={dietPreferences.includes(category)}
              // additionalClasses={dietPreferences.includes(
              //   category ? " bg-amber-900" : ""
              // )}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex justify-center col-span-2">
          <Button onClick={handleSubmit} additionalClasses=" mt-5 w-1/2">
            {isLoading ? <SmallSpinner /> : "CREATE MEAL PLAN"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
