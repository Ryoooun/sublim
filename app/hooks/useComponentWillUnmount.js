import { useEffect } from "react";

export default function useComponentWillUnmount(callback) {
  useEffect(
    () => () => {
      callback();
    },
    []
  );
}
