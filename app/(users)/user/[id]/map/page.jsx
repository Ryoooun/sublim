"use client";

import PageWrapper from "./components/template/PageWrapper";
import { Heading, Container, Box } from "@/app/common/chakraui/ChakraUI";

import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

export default function page(params) {
  const ToggleContent = ({ header, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log();
    return (
      <motion.div layout onClick={() => setIsOpen(!isOpen)}>
        <Heading as={motion.h1} layout>
          {header}
        </Heading>
        {isOpen ? (
          <Box fontSize="lg" bg="blackAlpha.200">
            {content}
          </Box>
        ) : null}
      </motion.div>
    );
  };
  return (
    <PageWrapper>
      <Container display="flex" flexDirection="column" alignItems="center">
        <Heading>Map page</Heading>
        <Box bg="brand.200" w="45rem" h="45rem">
          <LayoutGroup>
            <ToggleContent
              header="Title1"
              content="content1content1content1content1content1content1content1"
            />
            <ToggleContent
              header="Title2"
              content="content2content2content2content2content2content2content2"
            />
          </LayoutGroup>
        </Box>
      </Container>
    </PageWrapper>
  );
}
