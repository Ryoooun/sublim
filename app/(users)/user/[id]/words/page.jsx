import PageWrapper from "./components/template/PageWrapper";
import WordPageContent from "./components/template/WordPageContent";
import WordList from "./components/organisms/WordList";

export default function page(params) {
  return (
    <PageWrapper>
      <WordPageContent />
    </PageWrapper>
  );
}
