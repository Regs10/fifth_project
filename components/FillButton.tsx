"use client";
import { Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { useSpecialRoute } from "@/hooks/useSpecialRoute";
interface ButtonProps {
  title: string;
  bg?: boolean;
  footer?: boolean;
}

export default function FillButton({
  title,
  bg = true,
  footer = false,
}: ButtonProps) {
  const { hovered, ref } = useHover();
  const isSpecialRoute = useSpecialRoute();
  if (isSpecialRoute) {
    return (
      <Button
        ref={ref}
        justify="center"
        leftSection={hovered ? <IconArrowRight /> : null}
        fw={500}
        fz={18}
        variant={bg ? "filled" : "outline"}
        c={footer ? (bg ? "black" : "white") : "black"}
        style={{
          border: `${
            footer ? (bg ? "" : "1px solid white") : "1px solid black"
          }`,
          borderRadius: "50px ",
          letterSpacing: "2px",
        }}
      >
        {title}
      </Button>
    );
  } else {
    return (
      <Button
        ref={ref}
        justify="center"
        leftSection={hovered ? <IconArrowRight /> : null}
        fw={500}
        fz={18}
        variant={bg ? "filled" : "outline"}
        c={bg ? "black" : "white"}
        style={{
          border: `${bg ? "" : "1px solid white"}`,
          borderRadius: "50px ",
          letterSpacing: "2px",
        }}
      >
        {title}
      </Button>
    );
  }
}
