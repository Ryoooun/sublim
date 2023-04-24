"use client";
import {
  Flex,
  Input,
  Button,
  Text,
  Heading,
  Box,
} from "@/app/common/chakraui/ChakraUI";
import { useMemo, useState, useEffect } from "react";

import CloudWrapper from "./components/organisms/CloudWrapper";
import PageWrapper from "./components/template/PageWrapper";

export default function page(params) {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (value) {
      setUrl(value);
    }
  };
  return (
    <PageWrapper>
      <Heading>Map</Heading>
      <Text>
        記事のURLを入力して、単語を抽出することができます。単語をクリックして学習を始めましょう。
      </Text>
      <Flex direction="row" w="80vw">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="URL"
        />
        <Button colorScheme="whatsapp" onClick={handleClick}>
          作成
        </Button>
      </Flex>
      {url.length > 0 && <CloudWrapper url={url} />}
    </PageWrapper>
  );
}
