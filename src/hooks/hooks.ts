// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// export const useDebounced = <T>(value: T, delay = 500) => {
//   // https://www.typescriptlang.org/docs/handbook/2/generics.html

//   const [debouncedValue, setDebouncedValue] = useState<T>(value);

//   // https://react.dev/reference/react/useEffect

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => clearTimeout(timeout);
//   }, [value, delay]);

//   return debouncedValue;
// };

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
