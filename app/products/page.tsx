"use client";
import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import { products } from "../variables/data";
import SingleCard from "@/components/SingleCard";

export default function page() {
  return (
    <Box bg="#fffef6" w="100%">
      <Container size="1440px" pt={120} pb={70}>
        <Box w="100%">
          <Flex
            gap={50}
            style={{
              letterSpacing: "2px",
              overflowX: "auto",
            }}
          >
            <Text fw={400} fz={{ base: 21, md: 40 }} c="black">
              All products
            </Text>
            <Text fw={400} fz={{ base: 21, md: 40 }} c="#ccc">
              Drying cabinets
            </Text>
            <Text fw={400} fz={{ base: 21, md: 40 }} c="#ccc">
              Product accessories
            </Text>
            <Text fw={400} fz={{ base: 21, md: 40 }} c="#ccc">
              Laundry room
            </Text>
          </Flex>
          <Text fw={400} fz={{ base: 21, md: 40 }} c="#ccc" lh={0.5}>
            accessories
          </Text>
        </Box>
        <Grid w="100%" gutter="md" pt={60}>
          {products.map((item) => (
            <Grid.Col span={{ base: 12, md: 3 }} key={item.id}>
              <SingleCard item={item} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
