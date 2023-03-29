import { signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

import { useUser } from "../store/user";

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        useUser.setState({ user: null }, true);
        router.replace("/");
      })
      .catch((err) => {
        console.log(err.message);
        useUser.setState({ user: null }, true);
        router.replace("/");
      });
  };
  return logout;
};
