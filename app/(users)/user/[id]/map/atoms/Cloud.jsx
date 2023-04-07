import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import useSWR from "swr";
import { useEffect } from "react";
import { Box } from "@/app/common/chakraui/ChakraUI";

export default function Cloud(params) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(
    `/api/parse?url=https://qiita.com/hedgehog051/items/3b02a78ad7660307f076`,
    fetcher
  );

  if (data) {
    const textData = data.json.map((obj) => {
      const text = Object.keys(obj)[0];
      const value = obj[Object.keys(obj)];
      return { text, value };
    });
    const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

    return (
      <Box display="grid" placeContent="center">
        <WordCloud
          data={textData}
          width={200}
          height={200}
          font="Times"
          fontWeight="bold"
          fontSize={(word) => Math.log2(word.value) * 5}
          spiral="rectangular"
          rotate={(word) => word.value % 360}
          padding={5}
          random={Math.random}
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
      </Box>
    );
  }
}
