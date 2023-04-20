"use client";

import React from "react";

import PrimaryButton from "../atoms/PrimaryButton";
import AvatarMenu from "../molecules/AvatarMenu";

import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { RiLoginBoxLine } from "@react-icons/all-files/ri/RiLoginBoxLine";

import useAuthSetPersistence from "@/app/hooks/useAuthSetPersistence";

import { useUser } from "@/app/store/user";

import { useLogout } from "@/app/hooks/useLogout";

export default React.memo(function HeaderLoginContent(params) {
  const handleSignInWithPopup = useAuthSetPersistence();
  const logout = useLogout();
  const user = useUser((state) => state.user);

  return (
    <>
      {user ? (
        <AvatarMenu
          name={user.displayName}
          src={user.photoURL}
          logout={logout}
        />
      ) : (
        null ?? (
          <>
            <PrimaryButton
              title="Log in"
              color="whiteAlpha.700"
              icon={RiLoginBoxLine}
              onClick={handleSignInWithPopup}
            />
            <PrimaryButton
              title="Sing up"
              color="whiteAlpha.700"
              icon={AiOutlineUserAdd}
              onClick={() => alert("sign up")}
            />
          </>
        )
      )}
    </>
  );
});
