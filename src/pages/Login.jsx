import Button from "../components/Button";
import { inputClassNames } from "../helpers/classNames";

function Login() {
  return (
    <div className="min-h-[30vh] max-h-[50vh] flex flex-col items-center py-20 gap-8 lg:gap:10 text-xl">
      <h1 className="text-3xl lg:text-4xl mb-10">Log back into your account</h1>
      <div className="grid grid-cols-2 items-center gap-x-12 gap-y-4 -translate-x-12 lg:-translate-x-20">
        <label className="justify-self-end">username</label>
        <input
          className={`w-48 lg:w-72 ${inputClassNames}`}
          type="text"
        ></input>
        <label className="justify-self-end">password</label>
        <input
          className={`w-48 lg:w-72 ${inputClassNames}`}
          type="text"
        ></input>
        <Button additionalClasses="col-span-2 justify-self-end">LOGIN</Button>
      </div>
    </div>
  );
}

export default Login;
