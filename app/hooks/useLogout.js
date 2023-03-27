import { signOut, getAuth, connectAuthEmulator } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useUser } from "../store/user";
import { useIsAuth } from "../store/auth";

export const useLogout = () => {
  const router = useRouter();
  const user = useUser((state) => state.user);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        useUser.setState({ isAuth: true }, true);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        useUser.setState({ isAuth: false }, true);
        router.push("/");
      });
  };
  return logout;
};
