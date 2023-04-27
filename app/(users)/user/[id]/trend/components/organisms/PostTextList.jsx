import useWord from "@/app/hooks/useWord";
import WordBookmarkPopOver from "../molecules/WordBookmarkPopOver";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";

export default function PostTextList({ url }) {
  const { data, isLoading } = useWord(url);

  if (isLoading) {
    return (
      <>
        <CircularProgress isIndeterminate color="red.200" />
      </>
    );
  }
  return (
    <div>
      {Object.keys(data).map((obj, i) => {
        <WordBookmarkPopOver text={obj.text} key={i} />;
      })}
    </div>
  );
}
