"use client";

import { useState, useEffect } from "react";
import { Flex, Box } from "../common/chakraui/ChakraUI";

export default function HomeMenu(params) {
  const [isPcType, setIsPcType] = useState(true);
  useEffect(() => {
    const mobileTypeList = ["iPhone", "iPod", "iPad", "Android"];
    const machineType = navigator.userAgent;
    const mobileTypeCheck = mobileTypeList.filter((item) => {
      return machineType.search(item) != -1;
    });

    if (mobileTypeCheck.length > 0) {
      setIsPcType(false);
    } else {
      setIsPcType(true);
    }
  });

  return (
    <Flex pos="fixed" bg="green.400" w="100vw" h="5vh">
      <h1>これは{isPcType ? "PC" : "Mobile"}ヘッドコンテンツ</h1>
    </Flex>
  );
}
