import { Heading } from "../../common/chakraui/ChakraUI";
import React from "react";
// logoをスタイリングする。
export default React.memo(function Logo({
  logo = "SUBLIM",
  letterSpacing = "0.5rem",
  fontWeight = "thin",
  mt = "12",
}) {
  return (
    <Heading letterSpacing={letterSpacing} fontWeight={fontWeight} mt={mt}>
      {logo}
    </Heading>
  );
});
