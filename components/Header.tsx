"use client";
import { Box, Drawer, Flex, Image, Text, Title } from "@mantine/core";
import React from "react";
import styles from "./Header.module.css";
import LogoCircle from "./LogoCircle";
import FillButton from "./FillButton";
import {
  Globe,
  Search,
  ArrowLeftRight,
  BriefcaseBusiness,
  AlignJustify,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useCartContext } from "@/context/cart_context";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();
  const isSpecialRoute = pathname === "/products";
  const dynamicLogo = isSpecialRoute ? "#b8ada8" : "white";
  const dynamicColor = isSpecialRoute ? "black" : "white";
  const iconTheme = isSpecialRoute ? "#b8ada8" : "white";
  const { cart, removeFromCart } = useCartContext();
  console.log(cart);

  return (
    <>
      <Box
        w="100%"
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <Flex justify="space-between" align="center" px={45} py={20}>
          <div className={styles.spacingWord}>
            <LogoCircle />
            <Title order={3} c={dynamicLogo} pl={4}>
              PODAB
            </Title>
          </div>

          <Flex gap={20} align="center">
            <Flex align="center" gap={20} visibleFrom="md ">
              <Link href="/products">
                <Text size="18px" fw={700} c={dynamicColor}>
                  PRODUCTS
                </Text>
              </Link>
              <Text size="18px" c={dynamicColor} fw={700}>
                EXPLORE
              </Text>
              <FillButton title="BOOK A MEETING" bg={false} />
              <Globe color={iconTheme} />
              <Search color={iconTheme} />
            </Flex>
            <ArrowLeftRight color={iconTheme} />
            <Drawer
              offset={8}
              radius="md"
              opened={opened}
              onClose={close}
              title="Add card"
            >
              {cart.length === 0 ? (
                <Text>Your cart is empty.</Text>
              ) : (
                cart.map((item, index) => (
                  <Box key={index} mb={10}>
                    <Text fw={500}>{item.name}</Text>
                    <Text size="sm" c="dimmed">
                      Price: ${item.price}
                    </Text>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </Box>
                ))
              )}
            </Drawer>
            <BriefcaseBusiness color={iconTheme} onClick={open} />
            <AlignJustify color={iconTheme} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
