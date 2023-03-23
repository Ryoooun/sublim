import Logo from "../atoms/Logo";
import { Center } from "../../common/chakraui/ChakraUI";

// usage: Logo<atoms>をHeroLogoとしてスタイリングする
export default function HeroLogo({ logo }) {
  return (
    <Center>
      <Logo logo={logo} />
    </Center>
  );
}
