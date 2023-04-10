"use client";

import PageWrapper from "./components/template/PageWrapper";
import CloudWrapper from "./components/organisms/CloudWrapper";
import { useMemo } from "react";
export default function page(params) {
  const postURL = useMemo(() => {
    return "https://qiita.com/jnchito/items/459d58ba652bf4763820";
  });
  return (
    <PageWrapper>
      {/* <Container display="flex" flexDirection="column" alignItems="center"> */}
      {/* <Heading>Map page</Heading> */}
      {/* <Box bg="brand.200" w="45rem" h="45rem" textAlign="center"> */}
      {/* <ListComp /> */}
      {/* <Box boxSize="20rem"> */}
      <CloudWrapper url={postURL} />
      {/* </Box> */}
      {/* </Box> */}
      {/* </Container> */}
    </PageWrapper>
  );
}
