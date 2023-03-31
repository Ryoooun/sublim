import getData from "./template/QiitaPost";
import PageContentWrapper from "../../components/template/PageContentWrapper";

export default async function page(params) {
  const qiitaItems = await getData();
  return (
    <>
      <PageContentWrapper qiitaItems={qiitaItems} />
    </>
  );
}
