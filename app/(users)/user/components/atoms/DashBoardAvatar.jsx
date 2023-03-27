import { Avatar } from "../../../../common/chakraui/ChakraUI";

export default function DashBoardAvatar(src) {
  const srcUrl = src.src;
  return <Avatar src={srcUrl} />;
}
