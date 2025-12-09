"use client";

import { Radio, Flex, Group, TextInput, Checkbox, Button } from "@mantine/core";
import { useState } from "react";
import styles from "./FormBox.module.css";
import FillButton from "./FillButton";
export default function FormBox() {
  return (
    <>
      <TextInput label="Input label" placeholder="Input placeholder" />
      <Flex>
        <TextInput label="Input label" placeholder="Input placeholder" />
        <TextInput label="Input label" placeholder="Input placeholder" />
      </Flex>
      <TextInput label="Input label" placeholder="Input placeholder" />
      <TextInput label="Input label" placeholder="Input placeholder" />
      <TextInput label="Input label" placeholder="Input placeholder" />
      <Radio.Group
        label="How would you like to conduct the meeting? "
        withAsterisk
      >
        <Group mt="xs" className={styles.root}>
          <Radio
            value="Teams meeting"
            label="Teams meeting"
            color="rgba(0, 0, 0, 1)"
            variant="outline"
            radius="xl"
          />
          <Radio
            value="Phone"
            label="Phone"
            color="rgba(0, 0, 0, 1)"
            variant="outline"
            radius="xl"
          />
          <Radio
            value="At the Clean Show in Orlando"
            label="At the Clean Show in Orlando"
            color="rgba(0, 0, 0, 1)"
            variant="outline"
            radius="xl"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        mt={20}
        label="I agree to sell my privacy"
        color="rgba(0, 0, 0, 1)"
        variant="outline"
        radius="xs"
      />
      <Button
        variant="outline"
        color="rgba(23, 23, 23, 1)"
        radius="20px"
        mt={20}
        style={{
          fontSize: "18px",
          fontWeight: "500",
          letterSpacing: "2px",
        }}
      >
        SEND
      </Button>
    </>
  );
}
