import FillButton from "@/components/FillButton";
import { Button, Flex } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Button>click me</Button>
      <h1>hello world</h1>
      <Flex>
        <FillButton title="our product" />
        <FillButton bg={false} title="our product" />
      </Flex>
    </>
  );
}
