import getData from "./components/template/QiitaPost";
import PageContentWrapper from "./components/template/PageContentWrapper";

export default async function page(params) {
  const qiitaItems = await getData();
  const zennJson = await fetch("http://localhost:3000/api/zenn");
  const zennItems = await zennJson.json();

  const devPosts = await fetch("http://localhost:3000/api/dev.to");
  const devToItems = await devPosts.json();

  return (
    <>
      <PageContentWrapper
        qiitaItems={qiitaItems}
        zennItems={zennItems}
        devToItems={devToItems}
      />
    </>
  );
}
