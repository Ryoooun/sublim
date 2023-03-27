import { auth, GoogleProvider } from "@/app/auth/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useIsAuth } from "../store/auth";
import { useUser } from "../store/user";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function useAuthWithPopup() {
  const isAuth = useIsAuth((state) => state.isAuth);
  const [token, setToken] = useState(null);
  const user = useUser((state) => state.user);
  const router = useRouter();

  const handleSignWithPopup = useCallback(() => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setToken(token);
        useIsAuth.setState({ isAuth: true }, true);
        useUser.setState({ user: user }, true);
        console.log("success!");
        router.push(`/user`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(error);
        useIsAuth.setState({ isAuth: false }, true);
        useUser.setState({ user: null }, true);
        console.log(error);
        router.push("/");
      });
  }, []);
  return [handleSignWithPopup, isAuth, user, token];
}
