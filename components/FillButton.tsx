import { Button } from "@mantine/core";
import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
interface ButtonProps {
  title: string;
  bg?: boolean;
}

export default function FillButton({ title, bg = true }: ButtonProps) {
  return (
    <Button
      leftSection={<IconArrowRight />}
      variant={bg ? "filled" : "outline"}
      c={bg ? "black" : "red"}
      style={{
        border: `${bg ? "" : "1px solid red"}`,
      }}
    >
      {title}
    </Button>
  );
}
