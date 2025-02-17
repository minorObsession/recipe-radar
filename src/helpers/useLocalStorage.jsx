import { useState, useEffect } from "react";

//  ! REVIEW DIFFERENCES - ADVANTAGES OF DIFFERENT FUNCTION TYPES (this keyword.. this object)

// ! IMPLEMENT WITH ARROW FUNCTIONS
export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) || initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
