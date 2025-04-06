import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { fakeLogin } from "../features/searchSlice";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-20 ">
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
        <div className="flex text-xl lg:text-2xl flex-col gap-4 lg:gap-5 items-center">
          <h2 className=" ">Start planning like a pro</h2>
          <Button onClick={() => navigate("signup")}>GET STARTED</Button>
          <h1 className=" ">Already a member?</h1>
          <Button onClick={() => navigate("login")}>LOGIN</Button>

          {/* // ! fake Login */}
          <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 ">
            <h1 className="text-xl ">WANT TO SIMPLY TEST APP?</h1>
            <Button
              onClick={() => {
                dispatch(
                  fakeLogin({
                    name: "Bogdan Terzić",
                    username: "bogdan",
                    password: "111",
                    dietPreferences: [],
                  })
                );
                navigate("/app");
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
