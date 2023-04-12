import { useRef, useEffect } from "react";

// Timeout扱うフック
// function app(props){
//   const [seconds, setSeconds] = useState(0)
//   useTimeout(()=> {
//     setSeconds(seconds + 1);
//   }, 5000)

//   return <p>{seconds}</p>
// }

export default function useTimeout(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
