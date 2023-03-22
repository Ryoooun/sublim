"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { transitionHelper } from "./utils";
import "./styles.css";
export default function page() {
  const [count, setCount] = useState(1);

  const onIncrementClick = () => {
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          setCount(count + 1);
        });
      },
    });
  };

  return (
    <div>
      <div className="count">{count}</div>
      <button onClick={onIncrementClick}>Increment</button>
    </div>
  );
}
