import useSWR from "swr";

const fetcher = (id) => fetch(id).then((r) => r.json());

export default function useWord(id) {
  const { data, error, isLoading } = useSWR(`/api/parse?url=${id}`, fetcher);
  return {
    post: data,
    isLoading,
    isError: error,
  };
}
