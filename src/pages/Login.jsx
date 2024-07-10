import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import SmallSpinner from "../components/SmallSpinner";
import { inputClassNames } from "../helpers/classNames";
import { login } from "../features/searchSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { accounts } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const account = accounts.find((acc) => acc.username === username);
    console.log(account);

    if (
      !username ||
      !password ||
      username !== account.username ||
      password !== account.password
    )
      return alert("Something went wrong... Please try logging in again");

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(login(account));
      navigate("/app");
    }, 1000);
  }

  return (
    <form
      onSubmit={handleLogin}
      className="min-h-[30vh] max-h-[50vh] flex flex-col items-center  gap-8 lg:gap:10 text-xl"
    >
      <h1 className="text-3xl lg:text-4xl mb-10">Log back into your account</h1>
      <div className="grid grid-cols-2 items-center gap-x-12  w-full gap-y-4 -translate-x-12 lg:-translate-x-20">
        <label className="justify-self-end">username</label>
        <input
          className={`w-48 lg:w-72 ${inputClassNames}`}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="justify-self-end">password</label>
        <input
          className={`w-48 lg:w-72 ${inputClassNames}`}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button additionalClasses="col-span-2 justify-self-end w-20 lg:w-32">
          {" "}
          {isLoading ? <SmallSpinner /> : "LOGIN"}
        </Button>
      </div>
    </form>
  );
}

export default Login;
