import WordCloud from "react-d3-cloud";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import useSWR from "swr";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";

import { Container } from "@/app/common/chakraui/ChakraUI";
import { memo, useCallback, useMemo } from "react";

const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

function Cloud(params) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/parse?url=https://qiita.com/hedgehog051/items/3b02a78ad7660307f076`,
    fetcher
  );

  if (data) {
    console.log("fetch");
    const textData = data.json.map((obj) => {
      const text = Object.keys(obj)[0];
      const value = obj[Object.keys(obj)];
      return { text, value };
    });

    return (
      <Container display="grid">
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
      </Container>
    );
  }

  if (isLoading) {
    return <CircularProgress size="200px" color="brand.300" isIndeterminate />;
  }

  if (error) {
    console.log(error);
    return <h1>Errorが発生しました。</h1>;
  }
}

export default memo(Cloud);
