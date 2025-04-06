import { forwardRef } from "react";
import { inputClassNames } from "../helpers/classNames";

const SearchInput = forwardRef(({ placeholder, value, onChange }, ref) => {
  return (
    <input
      className={`input-base h-14 w-[clamp(280px,70%,90vw)] mx-auto sm:col-span-2`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

// !  add display name to fix ESLint warning
SearchInput.displayName = "SearchInput";

export default SearchInput;
