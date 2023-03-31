import { Avatar } from "@/app/common/chakraui/ChakraUI";
import React from "react";

const DashBoardAvatar = (src) => {
  const srcUrl = src.src;
  return <Avatar src={srcUrl} />;
};

export default DashBoardAvatar;
