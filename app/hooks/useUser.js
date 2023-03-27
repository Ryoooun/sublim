import { getAuth } from "firebase/auth";

export const useUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    const email = user.email;
    const accessToken = user.accessToken;
    const userName = user.displayName;
    const photoURL = user.photoURL;
    const userInfo = {
      userName,
      email,
      accessToken,
      photoURL,
    };

    return userInfo;
  } else {
    return { user };
  }
};
