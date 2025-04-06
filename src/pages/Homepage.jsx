import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { login } from "../features/searchSlice";
import { useEffect, useState, useRef } from "react";
import { useInputChangeDebounce } from "../helpers/useInputChangeDebounce(useRef)";
// import { useInputChangeDebounce } from "../helpers/useInputChangeDebounce(useState+useEffect)";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-full w-full flex flex-col justify-around items-center ">
        {/* // ! headings box */}
        <div className="">
          <h1 className="text-center text-4xl lg:text-4xl mb-4 ">
            RECIPE RADAR
          </h1>
          <h1 className=" text-center text-xl lg:text-2xl italic">
            Meal-planning made easy!
          </h1>
        </div>
        {/* // ! actions box */}
        <div className="flex text-xl lg:text-2xl flex-col gap-2 lg:gap-3 items-center">
          <h2 className=" ">Start planning like a pro</h2>
          <Button onClick={() => navigate("signup")}>GET STARTED</Button>
          <h1 className=" ">Already a member?</h1>
          <Button onClick={() => navigate("login")}>LOGIN</Button>

          {/* New "Fake Login" DIV */}
          <div
            className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 "
            style={{ top: "-8rem" }}
          >
            {" "}
            <h1 className="text-xl ">WANT TO SIMPLY TEST APP?</h1>
            <Button
              onClick={() => {
                // const account =
                dispatch(
                  login({
                    name: "Bogdan Terzić",
                    username: "bogdan",
                    password: "111",
                    dietPreferences: [],
                  })
                );
                navigate("/app");
              }}
              style={{
                backgroundColor: "#ff6347", // Make it stand out more
                fontSize: "1.5rem", // Bigger text for visibility
                padding: "1.5rem 4rem", // Larger button padding for prominence
                fontWeight: "700",
              }}
            >
              DEMO LOGIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
