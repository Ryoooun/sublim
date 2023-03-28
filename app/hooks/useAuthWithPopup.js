import { auth, GoogleProvider } from "@/app/auth/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useIsAuth } from "../store/auth";
import { useUser } from "../store/user";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function useAuthWithPopup() {
  const router = useRouter();

  const handleSignWithPopup = useCallback(() => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

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
  return handleSignWithPopup;
}
