"use client";
import { Box, Flex, Grid, SimpleGrid, Text } from "@mantine/core";

import FillButton from "./FillButton";

export default function Footer() {
  return (
    <>
      <Flex direction="column" w="100%" bg="#1f190d" c="#e0dbd1" pt={120}>
        <Box mx={50}>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Text
                fz={16}
                fw={600}
                pb={10}
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                EXPLORE
              </Text>
              <Text fz={18} fw={500}>
                Products
              </Text>
              <Text fz={18} fw={500}>
                Articles
              </Text>
              <Text fz={18} fw={500}>
                News
              </Text>
              <Text fz={18} fw={500}>
                Testimonials
              </Text>
              <Text fz={18} fw={500}>
                Industries
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Text
                fz={16}
                fw={600}
                pb={10}
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                PODAB
              </Text>
              <Text fz={18} fw={500}>
                About us
              </Text>
              <Text fz={18} fw={500}>
                Career
              </Text>
              <Text fz={18} fw={500}>
                Sustainability strategy
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Text
                fz={16}
                fw={600}
                pb={10}
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                SUPPORT
              </Text>
              <Text fz={18} fw={500}>
                Contact Us
              </Text>
              <Text fz={18} fw={500}>
                Frequently asked questions
              </Text>
              <Text fz={18} fw={500}>
                Cookie settings
              </Text>
              <Text fz={18} fw={500}>
                Terms and conditions
              </Text>
              <Text fz={18} fw={500}>
                Privacy policy
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Text
                fz={16}
                fw={600}
                pb={10}
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                PARTNER OCH MEDIA
              </Text>
              <Text fz={18} fw={500}>
                Sign in to the partner portal
              </Text>
              <Text fz={18} fw={500}>
                Become a partner
              </Text>
              <Text fz={18} fw={500}>
                Find a distributor
              </Text>
              <Text fz={18} fw={500}>
                Media center
              </Text>
            </Grid.Col>
          </Grid>
        </Box>
        <Flex
          // cols={{ base: 1, md: 2 }}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "", md: "space-between" }}
          align={{ base: "start", md: "" }}
          py={120}
          // gap={25}
          style={
            {
              // width: "fit-content",
            }
          }
          px={50}
        >
          <FillButton title="BOOK A MEETING" footer={true} />
          <SimpleGrid pt={{ base: 45, md: 0 }} cols={{ base: 1, md: 3 }}>
            <FillButton title="INSTAGRAM" bg={false} footer={true} />
            <FillButton title="FACEBOOK" bg={false} footer={true} />
            <FillButton title="lINKDIN" bg={false} footer={true} />
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
