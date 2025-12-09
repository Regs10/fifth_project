import { useCartContext } from "@/context/cart_context";
import { Box, Button, Flex, Text, Image, Checkbox } from "@mantine/core";
import { IconArrowRight, IconShoppingBag } from "@tabler/icons-react";
import { useState } from "react";
export interface productData {
  id: string;
  label: string;
  name: string;
  weight: string;
  kg: string;
  image: string;
  price: number;
}

export default function Card({ item }: { item: productData }) {
  const [selectedId] = useState<string>();
  const { id, name, price } = item;
  const { addToCart } = useCartContext();
  return (
    <Flex gap={15}>
      <Flex
        w="100%"
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
            {item.label}
          </Text>
          <Text fz="24px" fw={500}>
            {item.name}
          </Text>
          <Flex>
            <Text c="#95a0a8">{item.weight} | </Text>
            <Text c="#95a0a8" pl={5}>
              {item.kg}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <Button
            variant="outline"
            color="rgba(84, 84, 84, 1)"
            radius={20}
            leftSection={<IconShoppingBag stroke={1} />}
            onClick={() => addToCart({ id, price, name, item })}
          >
            {selectedId ? "SELECTED" : "QUOTE"}
          </Button>
          <Button variant="outline" color="rgba(84, 84, 84, 1)" radius={60}>
            {<IconArrowRight stroke={1} size={14} />}
          </Button>
        </Flex>
      </Flex>
    </Flex>

    // -------------------------------------
  );
}
