"use client";
import React from "react";

import styles from "./Slide.module.css";

export default function Slide() {
  return (
    // <Carousel
    //   slideSize=""
    //   height={200}
    //   slideGap="xs"
    //   controlSize={14}
    //   withControls={false}
    //   withIndicators={false}
    //   style={{
    //     width: "fit",
    //   }}
    //   emblaOptions={{
    //     loop: true,
    //     dragFree: false,
    //     align: "center",
    //   }}
    // >
    //   <Carousel.Slide>
    //     <Text fz={98} c="#dbd5cf" fw={600}>
    //       Fire & Rescue
    //     </Text>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Text fz={98} c="#dbd5cf" fw={600}>
    //       Equestrain
    //     </Text>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Text fz={98} c="#dbd5cf" fw={600}>
    //       Hospitality
    //     </Text>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Text fz={98} c="#dbd5cf" fw={600}>
    //       Defence Industry
    //     </Text>
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Text fz={98} c="#dbd5cf" fw={600}>
    //       Shared Laundry Spaces
    //     </Text>
    //   </Carousel.Slide>
    // </Carousel>
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <p className={styles.productWrap}>Fire & Rescue</p>
        <p className={styles.productWrap}>Equestrain</p>
        <p className={styles.productWrap}>Hospitality</p>
        <p className={styles.productWrap}>Defence Industry</p>
        <p className={styles.productWrap}>Shared Laundry Spaces</p>
      </div>
    </div>
  );
}
