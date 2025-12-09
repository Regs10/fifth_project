import { BackgroundImage, Text, Box, Flex, Overlay } from "@mantine/core";
import React from "react";

import FillButton from "./FillButton";

export default function HeroSection() {
  return (
    <BackgroundImage src="/background.webp">
      <Box pt={450} pl={50} pb={50}>
        <Box>
          <Text fz={{ base: 90, md: 150 }} c="white" fw={500} lh={1}>
            Innovative laudary
          </Text>
          <Text fz={{ base: 90, md: 150 }} c="white" fw={500} lh={1}>
            equipment
          </Text>
        </Box>
        <Flex pt={40} gap={16}>
          <FillButton title="OUR PRODUCT"></FillButton>
          <FillButton title="GET IN TOUCH" bg={false}></FillButton>
        </Flex>
      </Box>
    </BackgroundImage>
  );
}
