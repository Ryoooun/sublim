import Logo from "../atoms/Logo";
import { Center } from "../../common/chakraui/ChakraUI";
import React from "react";

// usage: Logo<atoms>をHeroLogoとしてスタイリングする
export default React.memo(function HeroLogo({ logo }) {
  return (
    <Center>
      <Logo logo={logo} />
    </Center>
  );
});
