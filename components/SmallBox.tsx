import { Box, Flex, Text } from "@mantine/core";
import React from "react";

export default function SmallBox() {
  return (
    <Box pos="absolute" bottom={100} right={{ base: 0, md: -90 }}>
      <Flex
        w={160}
        justify="center"
        //   align="center"
        direction="column"
        p={12}
        pl={20}
        pb={40}
        pr={28}
        bg="#fff26c"
        //   gap={2}
        style={{
          borderRadius: "0px 80px 80px 80px",
        }}
      >
        <Text fz={34} fw={500}>
          64%
        </Text>
        <Text lh={1} fw={450}>
          Less wear and tear compared to a tumble dryer
        </Text>
      </Flex>
    </Box>
  );
}
