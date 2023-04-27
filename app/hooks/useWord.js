import useSWR from "swr";

const fetcher = (id) => fetch(id).then((r) => r.json());

function useWord(url) {
  // const data = await fetch(`/api/parse?url=${url}`);
  const { data, isLoading } = useSWR(`/api/parse?url=${url}`, fetcher);

  return { data, isLoading };
  // isLoading: isLoading,
  // isError: error,
}

export default useWord;
