"use client";
import { Flex, CircularProgress } from "@/app/common/chakraui/ChakraUI";

import useWord from "@/app/hooks/useWord";
import { memo, useState } from "react";
import useSWR from "swr";
import Cloud from "../atoms/Cloud";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function CloudWrapper({ url }) {
  const { data, isLoading, error } = useSWR(`/api/parse?url=${url}`, fetcher);
  if (error) {
    console.log(error);
    return <h1>Errorが発生しました。</h1>;
  }
  if (isLoading) {
    console.log("isLoading");
    return (
      <Box width="90vw" height="90vh" display="grid" placeContent="center">
        <CircularProgress size="200px" color="brand.300" isIndeterminate />
      </Box>
    );
  }
  return <Cloud post={data.json} />;
}
