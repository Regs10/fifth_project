import React from "react";
import styles from "./LogoCircle.module.css";
import { useSpecialRoute } from "@/hooks/useSpecialRoute";
import { Box } from "@mantine/core";
export default function LogoCircle() {
  const isSpecialRoute = useSpecialRoute();
  const dynamicLogo = isSpecialRoute ? "#b8ada8" : "white";
  return (
    <div className={styles.diamond}>
      <Box
        className={styles.circle_top}
        bg={dynamicLogo ? "#b8ada8" : "black"}
      ></Box>
      <Box
        className={styles.circle_right}
        bg={dynamicLogo ? "#b8ada8" : "black"}
      ></Box>
      <Box
        className={styles.circle_bottom}
        bg={dynamicLogo ? "#b8ada8" : "black"}
      ></Box>
      <Box
        className={styles.circle_left}
        bg={dynamicLogo ? "#b8ada8" : "black"}
      ></Box>
    </div>
  );
}
