import PageWrapper from "./components/template/PageWrapper";
import WordPageContent from "./components/template/WordPageContent";

export default function page(params) {
  return (
    <PageWrapper>
      <WordPageContent />
    </PageWrapper>
  );
}
