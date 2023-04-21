import { m, LazyMotion, domAnimation } from "framer-motion";

const hasBookmark = {
  width: "1rem",
  height: "1rem",
  backgroundColor: "#d44",
  borderRadius: "50%",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#fff",
  padding: "1rem",
  display: "grid",
  placeContent: "center",
  position: "relative",
  top: "-5px",
  left: "-5px",
};

const noBookmark = {
  width: "8px",
  height: "8px",
  backgroundColor: "#d3d3d3",
  borderRadius: "50%",
  fontSize: "5px",
  fontWeight: "bold",
  color: "#fff",
  padding: "12px",
  display: "grid",
  placeContent: "center",
  position: "relative",
  top: "-5px",
  left: "-5px",
};

export default function BookmarkBadge({ count }) {
  if (count > 0) {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{
            rotate: ["0deg", "15deg", "0deg", "-15deg", "0deg"],
            scale: [1, 0.8, 1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={hasBookmark}>
          {count}
        </m.div>
      </LazyMotion>
    );
  } else {
    <div style={noBookmark}>{count}</div>;
  }
}
