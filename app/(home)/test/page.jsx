"use client";

import Lottie from "lottie-react";
import sublim from "../../../public/lottie/sublim_lottie.json";

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
      {/* <div className="count">{count}</div>
      <button onClick={onIncrementClick}>Increment</button> */}
      <Lottie animationData={sublim} />
    </div>
  );
}
