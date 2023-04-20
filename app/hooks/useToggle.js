import { useCallback, useState } from "react";

export default function useToggle(initialBoolean) {
  const [flag, setFlag] = useState(initialBoolean);

  const toggle = useCallback(() => {
    setFlag(!flag);
    console.log(flag);
  }, [flag]);

  return [toggle, flag];
}
