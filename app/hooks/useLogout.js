import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../auth/firebase";
import { useUser } from "../store/user";

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
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
