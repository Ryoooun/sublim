"use client";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";
import useSWR from "swr";

export default function WordList(params) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/parse?url=https://qiita.com/hedgehog051/items/3b02a78ad7660307f076`,
    fetcher
  );
  if (isLoading) {
    return <CircularProgress isIndeterminate size="50rem" color="brand.400" />;
  }

  if (data) {
    console.log("fetch finished");
    // const textData = data.json.map((obj) => {
    //   const text = Object.keys(obj)[0];
    //   const value = obj[Object.keys(obj)];
    //   return { text, value };
    // });
    return (
      <>
        {data.json
          .map((obj) => {
            const text = Object.keys(obj)[0];
            const value = obj[Object.keys(obj)];
            return { text, value };
          })
          .map((obj) => {
            return <p key={obj.text}>{obj.text}</p>;
          })}
      </>
    );
  }
}
