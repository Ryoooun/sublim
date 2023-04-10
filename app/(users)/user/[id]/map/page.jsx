"use client";

import PageWrapper from "./components/template/PageWrapper";
import { Heading, Container, Box } from "@/app/common/chakraui/ChakraUI";
import Cloud from "./atoms/Cloud";

export default function page(params) {
  return (
    <PageWrapper>
      {/* <Container display="flex" flexDirection="column" alignItems="center"> */}
      {/* <Heading>Map page</Heading> */}
      {/* <Box bg="brand.200" w="45rem" h="45rem" textAlign="center"> */}
      {/* <ListComp /> */}
      {/* <Box boxSize="20rem"> */}
      <Cloud />
      {/* </Box> */}
      {/* </Box> */}
      {/* </Container> */}
    </PageWrapper>
  );
}
