import useSWR from "swr";

const fetcher = (id) => fetch(id).then((r) => r.json());

function useWord({ url }) {
  // const data = await fetch(`/api/parse?url=${url}`);
  const { data } = useSWR(`/api/parse?url=${url}`, fetcher);

  return {
    post: data,
    // isLoading: isLoading,
    // isError: error,
  };
}

export default useWord;
