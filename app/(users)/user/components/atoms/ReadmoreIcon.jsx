import Lottie from "lottie-react";
import icon from "../../../../../public/lottie/rocket-line.json";

const View = () => {
  return <Lottie animationData={icon} />;
};

export default function ReadmoreIcon({ user }) {
  return (
    <>
      <View />
    </>
  );
}
