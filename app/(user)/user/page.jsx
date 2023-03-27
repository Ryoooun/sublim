"use client";

import { useLogout } from "@/app/hooks/useLogout";

import { Button } from "../../common/chakraui/ChakraUI";
import { useUser } from "@/app/store/user";

export default function page(params) {
  const logout = useLogout();
  const user = useUser((state) => state.user);

  const LoginUser = () => {
    if (user) {
      return <p>こんにちは!{`${user.displayName}`}さん</p>;
    } else {
      <p>こんにちは!ゲストさん</p>;
    }
  };

  return (
    <>
      <h1>User page</h1>
      <LoginUser />
      <Button onClick={logout}>Log out</Button>
    </>
  );
}
