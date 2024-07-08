import { inputClassNames } from "../helpers/classNames";

function SearchInput({ placeholder, value, onChange }) {
  return (
    <input
      className={`${inputClassNames}`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
}

export default SearchInput;
