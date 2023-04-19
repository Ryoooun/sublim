import { Suspense } from "react";
import { CircularProgress, Box } from "@/app/common/chakraui/ChakraUI";

export default function TrendLayout({ children }) {
  return (
    <>
      {/* <Suspense
        fallback={
          <Box
            style={{
              display: "grid",
              placeContent: "center",
              height: "100vh",
            }}>
            <CircularProgress color="brand.400" size="100px" isIndeterminate />
          </Box>
        }> */}
      {children}
      {/* </Suspense> */}
    </>
  );
}
