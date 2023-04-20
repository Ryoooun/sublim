"use client";

import { notFound } from "next/navigation";
import { getauth } from "../auth/firebase";
import { useIsAuth } from "../store/auth";
import { useUser } from "../store/user";

export const useUserHook = () => {
  try {
    const auth = getauth();

    const user = auth.currentUser;

    if (user !== null) {
      const email = user.email;
      const uid = user.uid;
      const userName = user.displayName;
      const photoURL = user.photoURL;
      const userInfo = {
        userName,
        email,
        uid,
        photoURL,
      };

      return userInfo;
    } else {
      return { user };
    }
  } catch (err) {
    console.log(err);
    useIsAuth.setState({ isAuth: false }, true);
    useUser.setState({ user: null }, true);
    notFound();
  }
};
