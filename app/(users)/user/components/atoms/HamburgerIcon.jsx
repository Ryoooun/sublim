import * as React from "react";
import { useState } from "react";
import { useMediaQuery } from "../../../../common/chakraui/ChakraUI";

const HamburgerIcon = React.memo(
  ({ isOpen, toggle, isLargerThen50em, ref }) => {
    const lineStyle = {
      fill: "none",
      transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms",
      stroke: `${isOpen ? "#5c5c5c" : "#5c5c5caa"}`,
      strokeWidth: "5.5",
      strokeLinecap: "round",
    };

    return (
      <svg
        ref={ref}
        className="ham hamRotate ham8"
        viewBox="0 0 100 100"
        width={isLargerThen50em ? 50 : 50}
        onClick={toggle}
        cursor="pointer"
        style={
          isOpen
            ? {
                WebkitTapHighlightColor: "transparent",
                transition: "transform 400ms",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                position: "absolute",
                transform: "rotate(45deg)",
                backgroundColor: "#3fcb72",
                borderRadius: "3rem",
                marginTop: "0.1rem",
                zIndex: "10",
              }
            : {
                WebkitTapHighlightColor: "transparent",
                transition: "transform 400ms",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                position: "absolute",
                backgroundColor: "#0000",
                borderRadius: "3rem",
                marginTop: "0.1rem",
                zIndex: "10",
              }
        }>
        <path
          className="line top"
          style={
            isOpen
              ? {
                  ...lineStyle,
                  strokeDasharray: "40 160",
                  strokeDashoffset: "-64px",
                }
              : { ...lineStyle, strokeDasharray: "40 160" }
          }
          d="M30 33h40c3.723 0 7.5 3.126 7.5 8.578S74.773 50 70 50H50"
        />
        <path
          className="line middle"
          d="M30 50h40"
          style={
            isOpen
              ? {
                  ...lineStyle,
                  strokeDasharray: "40 142",
                  transformOrigin: "50%",
                  transition: "transform 400ms",
                  transform: "rotate(90deg)",
                }
              : {
                  ...lineStyle,
                  strokeDasharray: "40 142",
                  transformOrigin: "50%",
                  transition: "transform 400ms",
                }
          }
        />
        <path
          className="line bottom"
          d="M70 67H30s-7.5-.802-7.5-8.366C22.5 51.071 30 50 30 50h20"
          style={
            isOpen
              ? {
                  ...lineStyle,
                  strokeDasharray: "40 85",
                  transformOrigin: "50%",
                  transition: "transform 400ms, stroke-dashoffset 400ms",
                  strokeDashoffset: "-64px",
                }
              : {
                  ...lineStyle,
                  strokeDasharray: "40 85",
                  transformOrigin: "50%",
                  transition: "transform 400ms, stroke-dashoffset 400ms",
                }
          }
        />
      </svg>
    );
  }
);

export default HamburgerIcon;
