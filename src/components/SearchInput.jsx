import { forwardRef } from "react";
import { inputClassNames } from "../helpers/classNames";

const SearchInput = forwardRef(({ placeholder, value, onChange }, ref) => {
  return (
    <input
      className={`${inputClassNames} h-14`}
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
