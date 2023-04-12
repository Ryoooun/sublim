import { useState, useCallback } from "react";

// Arrayを宣言的に扱うためのフック
export default function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = useCallback((item) => {
    setArray((_arr) => [..._arr, item]);
  }, []);

  const unshift = useCallback((item) => {
    setArray((_arr) => [item, ..._arr]);
  }, []);

  const deleteIndex = useCallback((index) => {
    setArray((_arr) => {
      _arr.splice(index, 1);
      return [..._arr];
    });
  }, []);

  return [array, { set: setArray, push, unshift, deleteIndex }];
}
