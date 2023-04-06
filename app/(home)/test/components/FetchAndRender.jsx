import useSWR from "swr";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";
import { useMemo } from "react";

export default function FetchAndRender({ postUrl }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/parse?url=${postUrl}`,
    fetcher
  );

  if (error)
    return (
      <div>
        <h1>正しいURLを入力してください。</h1>
      </div>
    );
  if (isLoading)
    return (
      <div>
        <CircularProgress isIndeterminate color="brand.700" size="200px" />
      </div>
    );

  return (
    <div>
      <ul>
        {data.json
          .filter((obj) => `${Object.keys(obj)}`.length > 1)
          .filter((obj) => obj[Object.keys(obj)] > 5)
          .map((obj, i) => {
            return <li>{`${Object.keys(obj)}`.replace("-", "")}</li>;
          })}
      </ul>
    </div>
  );
}
