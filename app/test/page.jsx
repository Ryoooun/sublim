"use client";

import useSWR from "swr";
import { useURLStore } from "../store/urlOrigin";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function page() {
  const originUrl = useURLStore((state) => state.originUrl);
  const { data, error } = useSWR(`${originUrl}/api/hello`, fetcher);
  console.log(data);
  return (
    <div>
      <h1 style={{ fontSize: "100px" }}>Hello</h1>
    </div>
  );
}
