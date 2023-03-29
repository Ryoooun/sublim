import { SideMenu } from "../organisms/SideMenu";

import { useLogout } from "../../../../hooks/useLogout";
import { useUserHook } from "@/app/hooks/useUser";

export default function Menu({ children }) {
  const user = useUserHook();
  const logout = useLogout();

  return (
    <>
      <SideMenu logout={logout} user={user}>
        {children}
      </SideMenu>
    </>
  );
}
