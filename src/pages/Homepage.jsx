import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { login } from "../features/searchSlice";
// import styles from "./Homepage.module.css";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center py-20 lg:py-10 relative">
      <h1 className="text-center text-4xl mb-6">RECIPE RADAR</h1>
      <h1 className=" text-center text-2xl mb-20 lg:mb-10 italic">
        Meal-planning made easy!
      </h1>
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl mt-5">Start planning like a pro</h2>
        <Button onClick={() => navigate("signup")}>GET STARTED</Button>
        <h1 className="text-xl mt-5">Already a member?</h1>
        <Button onClick={() => navigate("login")}>LOGIN</Button>

        {/* New "Fake Login" DIV */}
        <div
          className="flex flex-col items-center gap-5 absolute "
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
  );
}

export default Homepage;
