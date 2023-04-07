"use client";
import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { Heading } from "@/app/common/chakraui/ChakraUI";
import { useEffect } from "react";
export const ListComp = () => {
  const data = [
    { id: 1, title: "item1" },
    { id: 2, title: "item2" },
    { id: 3, title: "item3" },
  ];
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(1);
  }, []);
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
      }}>
      {data.map((post) => (
        <motion.li
          key={post.id}
          onClick={() => setSelected(post.id)}
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            userSelect: "none",
          }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}>
          <Heading
            mb="4"
            fontSize="2xl"
            color={[, "red", "blue", "yellow"][post.id]}>
            {post.title}
          </Heading>
          {post.id == selected ? (
            <motion.div
              layoutId="underline"
              // transition={{
              //   layout: {
              //     duration: 0.2,
              //     ease: "easeInOut",
              //   },
              // }}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "0px",
                right: "0",
                height: "4px",
                backgroundColor: "#5686F5",
                borderRadius: "8px",
              }}
            />
          ) : null}
        </motion.li>
      ))}
    </ul>
  );
};
