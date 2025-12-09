import Card from "@/components/Card";

import HeroSection from "@/components/HeroSection";
import SmallBox from "@/components/SmallBox";

import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Paper,
  SimpleGrid,
} from "@mantine/core";
import { IconArrowRight, IconRosetteDiscountCheck } from "@tabler/icons-react";

import Slide from "@/components/Slide";

import FormBox from "@/components/FormBox";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Flex
        w="100%"
        bg="#cac1bc"
        gap={50}
        pl={60}
        py={60}
        style={{
          overflowX: "scroll",
        }}
      >
        <Text
          c="white"
          fz={82}
          fw={500}
          style={{
            textWrap: "nowrap",
          }}
        >
          Drying cabinates
        </Text>
        <Text
          c="white"
          fz={82}
          fw={500}
          style={{
            textWrap: "nowrap",
          }}
        >
          Product accessories
        </Text>
        <Text
          c="white"
          fz={82}
          fw={500}
          style={{
            textWrap: "nowrap",
          }}
        >
          Laundry room
        </Text>
      </Flex>
      {/* ------------------------ */}
      <Container size="1440px">
        <SimpleGrid cols={{ base: 1, md: 2 }} px={{ base: 40, md: 0 }} py={140}>
          <Box>
            <Text fz={64} fw={500} lh={0.5}>
              Drying solution for
            </Text>
            <Text fz={64} fw={500} lh={1.5}>
              commercial laundry
            </Text>
          </Box>
          <Box>
            <Box>
              <Text lh={1} fz="20px" fw={500}>
                Experts in professional and commercial laundry equipment for 80
                years,
              </Text>
              <Text lh={1} fz={20} fw={500}>
                specializing in developing durable, efficient, and
                high-performing products.
              </Text>
            </Box>
            <Flex align="center" gap={10}>
              <p
                style={{
                  letterSpacing: "0.2rem",
                  fontWeight: "500",
                }}
              >
                EXPLORE OUR PRODUCTS
              </p>
              <IconArrowRight size={28} stroke={1} />
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
      {/* ---------------------------- */}
      <Card />
      <Box bg="#f6f4ec">
        <Container size="1440px" py={130} px={40}>
          <Flex gap={120} direction={{ base: "column", md: "row" }}>
            <Box
              pr={{ base: 100, md: 0 }}
              style={{
                flex: 1.3,
                position: "relative",
              }}
            >
              <Image src="/furnish.jpg" h={845} w="100%" />
              <SmallBox />
            </Box>
            <Flex
              direction="column"
              gap={35}
              style={{
                flex: 1.1,
              }}
            >
              <Text lh={1} fz={68} fw={550}>
                Extend lifespan of your textiles and PPE by 64%
              </Text>
              <Text fz={20} fw={400} lh={1}>
                PODAB drying cabinets gently dry textiles and PPE using heat and
                air circulation, avoiding mechanical action. This method helps
                preserve textiles and reduces wear and tear.
              </Text>
              <Box>
                <Button
                  variant="outline"
                  color="rgba(20, 20, 20, 1)"
                  radius="20px"
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  UPGRADE YOUR EQUIPMENT
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* -------------------------------- */}
      <Box bg="#cac1bc">
        <Container size="1440px" px={40}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            gap={{ base: 35, md: 0 }}
            py={140}
          >
            <Text
              fz={64}
              fw={500}
              lh={0.8}
              style={{
                flex: 1,
              }}
            >
              Tailored solutions for your industry
            </Text>
            <Box
              style={{
                flex: 1,
              }}
            >
              <Text lh={1} fz="18px" fw={500}>
                Optimize and streamline your laundry room operations with
                PODAB’s innovative and specialized laundry solutions, designed
                to meet the unique needs of your business while enhancing
                efficiency and productivity.
              </Text>

              <Flex align="center" gap={10}>
                <p
                  style={{
                    letterSpacing: "0.2rem",
                    fontWeight: "500",
                  }}
                >
                  EPLORE ALL INDUSTRIES
                </p>
                <IconArrowRight size={28} stroke={1} />
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Slide />
      </Box>
      {/* --- */}
      <Box bg="#f6f4ec">
        <Container size="1440px" py={130}>
          <Flex direction={{ base: "column", md: "row" }} gap={120}>
            <Box
              style={{
                flex: 1.3,
                position: "relative",
              }}
            >
              <Image src="/washing.jpg" h={486} w="100%" />
            </Box>
            <Flex
              direction="column"
              gap={35}
              style={{
                flex: 1.1,
              }}
            >
              <Text lh={1} fz={68} fw={550}>
                Sustainability & innovation
              </Text>
              <Text fz={20} fw={400} lh={1}>
                PODAB is at the forefront of creating sustainable products that
                not only enhance your laundry routine but also contribute to a
                greener future.
              </Text>
              <Box>
                <Button
                  variant="outline"
                  color="rgba(20, 20, 20, 1)"
                  radius="20px"
                  style={{
                    letterSpacing: "2px",
                  }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* =----------------- */}
      <Box bg="#edeae3" pb={140}>
        <Container size="1440px" px={40}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            gap={35}
            py={140}
          >
            <Text
              fz={74}
              fw={500}
              lh={0.8}
              style={{
                flex: 2,
              }}
            >
              Drying solutions for <br /> longevity and efficiency
            </Text>
            <Box
              style={{
                flex: 1.2,
              }}
            >
              <Text lh={1} fz="18px" fw={500}>
                PODAB’s Scandinavian-inspired drying cabinets have been
                meticulously crafted with attention to detail for maximal
                functionality. The drying cabinets have undergone rigorous
                testing to ensure a life expectancy of 20+ years, requiring
                minimal maintenance to sustain their longevity.
              </Text>

              <Flex align="center" gap={10}>
                <p
                  style={{
                    letterSpacing: "0.2rem",
                    fontWeight: "500",
                  }}
                >
                  MORE ABOUT THE TECHNOLOGY AND DESIGN
                </p>
                <IconArrowRight size={28} stroke={1} />
              </Flex>
            </Box>
          </Flex>
          <Paper
            p={20}
            bg="#f6f4ec"
            style={{
              borderRadius: "20px",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Temperature and humidity tracking for optimal drying
              </p>
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Fully automatic programs
              </p>
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Smooth, wrinkle-free drying for perfect results
              </p>
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Pre-set start times
              </p>
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Lower utility costs while maintaining fabric quality and
                longevity
              </p>
            </Flex>
            <Flex
              align="center"
              gap={8}
              style={{
                borderBottom: "1px solid gray",
              }}
            >
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Interchangeable drying accessories
              </p>
            </Flex>
            <Flex align="center" gap={8}>
              <IconRosetteDiscountCheck size={32} color="gray" />
              <p
                style={{
                  fontSize: "28px",
                }}
              >
                Gentle, energy-efficient drying that extends textile lifespan
              </p>
            </Flex>
          </Paper>
        </Container>
      </Box>
      <Box bg="#fffef6">
        <Container size="1440px" py={130}>
          <SimpleGrid cols={{ base: 1, md: 2 }}>
            <Flex
              direction="column"
              gap={20}
              style={{
                flex: 1.3,
              }}
            >
              <Text lh={1} fz={72} fw={550} pb={10}>
                Book a meeting
              </Text>
              <Text fz={20} fw={500} lh={1}>
                We’ll help you analyze your industry needs and assess whether
                our solutions are the right fit for your business. Our experts
                focus exclusively on drying cabinets, offering expert guidance
                to ensure you find the optimal solution tailored to your
                requirements.
              </Text>
              <Text fz={20} fw={500} lh={1}>
                Fill out the form, and we’ll get in touch with you, or give us a
                call at +1 800-683 48 73.
              </Text>

              <Box mt={40}>
                <Flex
                  w={160}
                  justify="center"
                  //   align="center"
                  direction="column"
                  p={12}
                  pl={20}
                  pb={40}
                  gap={4}
                  pr={28}
                  bg="#fff26c"
                  //   gap={2}
                  style={{
                    borderRadius: "0px 80px 80px 80px",
                  }}
                >
                  <Text fz={34} fw={500} lh={0.8}>
                    Free of charge
                  </Text>
                  <Text lh={1} fw={450}>
                    Create a safer and more modern laundry solution
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Box
              style={{
                flex: 1.5,
              }}
            >
              {/* --------form----- */}
              <FormBox />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
