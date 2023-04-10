import Markdown from "./components/organisms/Markdown";
import PageWrapper from "./components/template/PageWrapper";

export default function page(params) {
  return (
    <PageWrapper>
      <Markdown />
    </PageWrapper>
  );
}
