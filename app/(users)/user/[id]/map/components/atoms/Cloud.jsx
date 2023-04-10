import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useCallback, useMemo } from "react";
import WordCloud from "react-d3-cloud";
const color = scaleOrdinal(schemeCategory10);
export default function Cloud({ post }) {
  const fontSize = useCallback((word) => Math.log2(word.value) * 5, []);
  const rotate = useCallback((word) => word.value % 5, []);
  const fill = useCallback((d, i) => color(i), []);
  const onWordClick = useCallback((event, d) => {
    console.log(`onWordClick: ${d.text}`);
  }, []);
  const onWordMouseOver = useCallback((event, d) => {
    console.log(`onWordMouseOver: ${d.text}`);
  }, []);
  const onWordMouseOut = useCallback((event, d) => {
    console.log(`onWordMouseOut: ${d.text}`);
  }, []);
  return (
    <WordCloud
      data={post}
      width={500}
      height={500}
      font="Times"
      fontWeight="bold"
      fontSize={fontSize}
      rotate={rotate}
      spiral="rectangular"
      padding={5}
      fill={fill}
      onWordClick={onWordClick}
      onWordMouseOut={onWordMouseOut}
      onWordMouseOver={onWordMouseOver}
    />
  );
}
