import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import styles from "./Homepage.module.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center py-20 lg:py-10">
      <h1 className="text-center text-4xl mb-3">NAME OF COMPANY</h1>
      <h1 className=" text-center text-2xl mb-20 lg:mb-10">
        Meal-planning and delivery made easy!
      </h1>
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl">start meal-planning like a pro</h2>
        <Button onClick={() => navigate("signup")}>GET STARTED</Button>
        <h1 className="text-xl mt-6">Already a member?</h1>
        <Button onClick={() => navigate("login")}>LOGIN</Button>
      </div>
    </div>
  );
}

export default Homepage;
