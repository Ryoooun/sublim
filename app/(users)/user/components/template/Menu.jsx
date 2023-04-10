import { SideMenu } from "./SideMenu";

import { Box, useMediaQuery } from "@/app/common/chakraui/ChakraUI";
import { useLogout } from "../../../../hooks/useLogout";
import { useUserHook } from "@/app/hooks/useUser";
import React, { useCallback, useMemo } from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";

export default React.memo(function Menu({ children }) {
  const user = useMemo(() => useUserHook(), []);
  const logout = useMemo(() => useLogout(), []);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");

  return (
    <LayoutGroup>
      <Box bg="#f5f6f6" overflow="hidden">
        <SideMenu
          logout={logout}
          user={user}
          isLargerThen50em={isLargerThen50em}>
          {children}
        </SideMenu>
      </Box>
    </LayoutGroup>
  );
});
