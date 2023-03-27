"use client";

import React from "react";

import PrimaryButton from "../atoms/PrimaryButton";
import AvatarMenu from "../molecules/AvatarMenu";

import { RiLoginCircleLine } from "@react-icons/all-files/ri/RiLoginCircleLine";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";

import useAuthWithPopup from "../../hooks/useAuthWithPopup";

export default React.memo(function HeaderLoginContent(params) {
  const [handleSignInWithPopup, isAuth, user] = useAuthWithPopup();
  return (
    <>
      {user ? (
        <AvatarMenu name={user.displayName} src={user.photoURL} />
      ) : (
        null ?? (
          <>
            <PrimaryButton
              title="Log in"
              color="whiteAlpha.700"
              icon={RiLoginCircleLine}
              onClick={() => handleSignInWithPopup()}
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