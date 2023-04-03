import { useEffect } from "react";

const useDebounceEffect = (
  callback: () => void,
  delay: number,
  dependencies: any[]
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...dependencies, delay]);
};

export default useDebounceEffect;
