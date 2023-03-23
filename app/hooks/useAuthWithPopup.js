import { auth, GoogleProvider } from "@/auth/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useIsAuth } from "../store/auth";

export default function useAuthWithPopup() {
  const setIsAuth = useIsAuth((state) => state.setIsAuth);
  const isAuth = useIsAuth((state) => state.isAuth);

  const handleSignWithPopup = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        setIsAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setIsAuth(false);
      });
  };

  return [handleSignWithPopup, isAuth];
}
