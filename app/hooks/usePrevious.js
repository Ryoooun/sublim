import { useEffect, useRef } from "react";

// 前回の値を保持する。
// function Counter() {
//   const [count, setCount ] = useState(0);
//   const prevCount = usePrevious(count);
//   return <p>Now: {count}, before: {prevCount}</p>;
// }

export default function usePrevious(value) {
  const previous = useRef();

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
}
