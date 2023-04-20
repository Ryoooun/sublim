import React from "react";
import { Center } from "../../common/chakraui/ChakraUI";
import Logo from "../atoms/Logo";

// usage: Logo<atoms>をHeroLogoとしてスタイリングする
export default React.memo(function HeroLogo({ logo }) {
  return (
    <Center>
      <Logo logo={logo} />
    </Center>
  );
});
