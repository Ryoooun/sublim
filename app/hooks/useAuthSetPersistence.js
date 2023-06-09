import {
  // browserSessionPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth, GoogleProvider } from "../auth/firebase";

import { useIsAuth } from "../store/auth";
import { useUser } from "../store/user";

import { useRouter } from "next/navigation";

export default function useAuthSetPersistence() {
  const router = useRouter();

  const handleSignWithPopup = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

        useIsAuth.setState({ isAuth: true }, true);
        useUser.setState({ user: user }, true);
        console.log("success!");
        router.push(`/user/${user.uid}`);
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
  };

  const setP = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.log("setSession");
        handleSignWithPopup();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return setP;
}
