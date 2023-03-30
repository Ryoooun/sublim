import { SideMenu } from "../organisms/SideMenu";

import { Box } from "@/app/common/chakraui/ChakraUI";
import { useLogout } from "../../../../hooks/useLogout";
import { useUserHook } from "@/app/hooks/useUser";

export default function Menu({ children }) {
  const user = useUserHook();
  const logout = useLogout();

  return (
    <Box bg="#F2EEEB" overflow="hidden">
      <SideMenu logout={logout} user={user}>
        {children}
      </SideMenu>
    </Box>
  );
}
