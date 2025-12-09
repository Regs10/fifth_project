import { Box, Button, Flex, Text, Image, Checkbox } from "@mantine/core";
import { IconArrowRight, IconShoppingBag } from "@tabler/icons-react";

export default function Card() {
  const item = Array.from({ length: 4 });
  return (
    <Box
      mb={50}
      w="100%"
      m="auto"
      style={{
        overflowX: "scroll",
      }}
    >
      <Flex w="1440px" gap={15} m="auto">
        {item.map((_, item) => (
          <Flex
            w="100%"
            key={item}
            direction="column"
            bg="#f6f4ec"
            h={515}
            gap={10}
            justify="space-between"
            p={15}
            style={{
              borderRadius: "15px",
            }}
          >
            <Checkbox
              defaultChecked
              labelPosition="left"
              label="compare"
              color="gray"
              variant="outline"
              radius="xl"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "end",
              }}
            />
            <Box w="100%" h={284}>
              <Image
                src="/image.png"
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
              />
            </Box>
            <Flex direction="column">
              <Text
                fw={500}
                style={{
                  letterSpacing: "1px",
                }}
              >
                DRYING CABINATE
              </Text>
              <Text fz="24px" fw={500}>
                ProLine FC20
              </Text>
              <Flex>
                <Text c="#95a0a8">44lb | </Text>
                <Text c="#95a0a8" pl={5}>
                  20kg
                </Text>
              </Flex>
            </Flex>
            <Flex justify="space-between">
              <Button
                variant="outline"
                color="rgba(84, 84, 84, 1)"
                radius={20}
                leftSection={<IconShoppingBag stroke={1} />}
              >
                QUOTE
              </Button>
              <Button variant="outline" color="rgba(84, 84, 84, 1)" radius={60}>
                {<IconArrowRight stroke={1} size={14} />}
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
    // -------------------------------------
  );
}
