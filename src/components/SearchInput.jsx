import { forwardRef } from "react";
import { inputClassNames } from "../helpers/classNames";

const SearchInput = forwardRef(({ placeholder, value, onChange }, ref) => {
  return (
    <input
      className={`input-base h-14 max-w-[70%] mx-auto sm:col-span-2`}
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
