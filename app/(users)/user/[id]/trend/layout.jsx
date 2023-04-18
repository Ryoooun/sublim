import { Suspense } from "react";
import { CircularProgress, Box } from "@/app/common/chakraui/ChakraUI";

export default function TrendLayout({ children }) {
  return (
    <>
      <Suspense
        fallback={
          <Box style={{ display: "grid", placeContent: "center" }}>
            <CircularProgress color="brand.400" isIndeterminate />
          </Box>
        }>
        {children}
      </Suspense>
    </>
  );
}
