import { useCallback, useRef } from "react";

export function useInputChangeDebounce(func, timeout = 1000) {
  // ! useCallback is preventing new creation of func on every re-render (e.g. if func is used in useEffect dependency array!)
  // ! no state variable is used only Ref so no re-renders! more efficient

  // * usage:
  // fnToRunOnInputChange(){}
  // const variableToStore = useInputChangeDebounce(fnToRunOnInputChange);
  // connect with controlled input in JSX

  const timerRef = useRef(null);

  // ! returns a function (debounces a function)
  return useCallback(
    (...args) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    },
    [func, timeout]
  );
}
