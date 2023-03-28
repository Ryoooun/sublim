import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

import { useIsAuth } from "../store/auth";
import { useUser } from "../store/user";

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        // useIsAuth.setState({ isAuth: false }, true);
        useUser.setState({ user: null }, true);
        router.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
        // useIsAuth.setState({ isAuth: false }, true);
        useUser.setState({ user: null }, true);
        router.replace("/");
      });
  };
  return logout;
};
