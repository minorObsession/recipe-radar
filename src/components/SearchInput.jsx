import { inputClassNames } from "../helpers/classNames";
import { useKeyPress } from "../helpers/useKeyPress";

function SearchInput({ placeholder, value, onChange, inputEl, handleSearch }) {
  useKeyPress("Enter", () => {
    if (document.activeElement !== inputEl.current) return;
    handleSearch();
  });

  return (
    <input
      className={`${inputClassNames} h-14 `}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputEl}
    ></input>
  );
}

export default SearchInput;
