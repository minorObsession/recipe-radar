import { useEffect } from "react";

export function useKeyPress(keyPressed, functionToRun) {
  useEffect(
    function () {
      function callback(e) {
        if (e.key.toLowerCase() === keyPressed.toLowerCase()) {
          functionToRun();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [functionToRun, keyPressed]
  );
}
