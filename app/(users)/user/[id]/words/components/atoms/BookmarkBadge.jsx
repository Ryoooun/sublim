import { m, LazyMotion, domAnimation } from "framer-motion";

const hasBookmark = {
  width: "8px",
  height: "8px",
  backgroundColor: "#d44",
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
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 1.5,
            times: [0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
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
