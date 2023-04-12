import { useRef, useEffect, useState } from "react";

// 前回の値を保持する。
// function Counter() {
//   const [count, setCount ] = useState(0);
//   const prevCount = usePrevious(count);
//   return <p>Now: {count}, before: {prevCount}</p>;
// }

export default function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
