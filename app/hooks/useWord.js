import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (id) => fetch(id).then((r) => r.json());

async function useWord(url) {
  const data = await fetch(`/api/parse?url=${url}`);
  // const { data } = useSWR(`/api/parse?url=${url}`, fetcher);

  return {
    post: data,
    // isLoading: isLoading,
    // isError: error,
  };
}

export default useWord;
