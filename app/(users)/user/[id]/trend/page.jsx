import getData from "./components/organisms/QiitaPost";
import { ZennPost } from "./components/organisms/ZennPost";
import { DevPost } from "./components/organisms/DevPost";

import PageContentWrapper from "./components/template/PageContentWrapper";
import { Suspense } from "react";
import { CircularProgress } from "@/app/common/chakraui/ChakraUI";
export default async function page(params) {
  const qiitaItems = await getData();
  const zennItemsJson = await ZennPost();
  const zennItems = await zennItemsJson.json();
  const devToItemsJson = await DevPost();
  const devToItems = await devToItemsJson.json();

  return (
    <>
      <Suspense
        fallback={
          <CircularProgress
            size="120px"
            thickness="5px"
            isIndeterminate
            color="gray.400"
          />
        }>
        <PageContentWrapper
          qiitaItems={qiitaItems}
          zennItems={zennItems}
          devToItems={devToItems}
        />
      </Suspense>
    </>
  );
}
