"use client";
import { SideMenu } from "./SideMenu";

import {
  Box,
  CircularProgress,
  Container,
  useMediaQuery,
} from "@/app/common/chakraui/ChakraUI";
import { useLogout } from "../../../../hooks/useLogout";

import React, { useMemo } from "react";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/auth/firebase";

export default React.memo(function Menu({ children }) {
  const [user, loading] = useAuthState(auth);

  const logout = useMemo(() => useLogout(), []);
  const [isLargerThen50em] = useMediaQuery("(min-width: 50em)");
  if (loading) {
    return (
      <Container display="grid" placeContent="center" w="100vw" h="100vh">
        <CircularProgress size="10rem" isIndeterminate color="brand.400" />
      </Container>
    );
  }
  if (user) {
    return (
      <LayoutGroup>
        <Box
          bg="#f5f6f6"
          overflow="hidden"
          onTouchMove={(e) => e.preventDefault()}>
          <SideMenu
            logout={logout}
            user={user}
            isLargerThen50em={isLargerThen50em}>
            {children}
          </SideMenu>
        </Box>
      </LayoutGroup>
    );
  }
});
