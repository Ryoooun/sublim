import useSWR from "swr";
import { useMemo } from "react";
const fetcher = (id) => fetch(id).then((r) => r.json());

function useWord({ url }) {
  const { data } = useSWR(`/api/parse?url=${url}`, fetcher);

  return {
    post: data,
    // isLoading: isLoading,
    // isError: error,
  };
}

export default useWord;
