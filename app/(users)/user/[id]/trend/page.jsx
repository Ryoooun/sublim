import getData from "./components/template/QiitaPost";
import { ZennPost } from "./components/organisms/ZennPost";
import { DevPost } from "./components/organisms/DevPost";

import PageContentWrapper from "./components/template/PageContentWrapper";

export default async function page(params) {
  const qiitaItems = await getData();
  const zennItemsJson = await ZennPost();
  const zennItems = await zennItemsJson.json();
  const devToItemsJson = await DevPost();
  const devToItems = await devToItemsJson.json();

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
