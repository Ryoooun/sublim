import getData from "./components/template/QiitaPost";
import PageContentWrapper from "./components/template/PageContentWrapper";

export default async function page(params) {
  const qiitaItems = await getData();
  console.log(qiitaItems);
  return (
    <>
      <PageContentWrapper qiitaItems={qiitaItems} />
    </>
  );
}
