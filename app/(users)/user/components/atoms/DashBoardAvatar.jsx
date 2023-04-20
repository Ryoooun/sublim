import { Avatar } from "@/app/common/chakraui/ChakraUI";

const DashBoardAvatar = (src) => {
  const srcUrl = src.src;
  return <Avatar src={srcUrl} />;
};

export default DashBoardAvatar;
