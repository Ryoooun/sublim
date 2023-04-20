import { CircularProgress } from "@/app/common/chakraui/ChakraUI";
import useSWR from "swr";

import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import WordCloud from "react-d3-cloud";

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
  if (data) {
    console.log("fetch");
    const textData = data.json.map((obj) => {
      const text = Object.keys(obj)[0];
      const value = obj[Object.keys(obj)];
      return { text, value };
    });
    const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

    return (
      <>
        <WordCloud
          data={textData}
          width={150}
          height={150}
          font="RictyDiminished-Bold"
          fontWeight="bold"
          fontSize={(word) => Math.log2(word.value) * 5}
          spiral="archimedean"
          rotate={(word) => word.value % 10}
          padding={0}
          // random={Math.random}
          fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
          onWordClick={(event, d) => {
            console.log(`onWordClick: ${d.text}`);
          }}
          onWordMouseOver={(event, d) => {
            console.log(`onWordMouseOver: ${d.text}`);
          }}
          onWordMouseOut={(event, d) => {
            console.log(`onWordMouseOut: ${d.text}`);
          }}
        />
      </>
    );
  }
}
