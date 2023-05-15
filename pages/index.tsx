import type { NextPage } from "next";
import Head from "next/head";
import { Button, Group, Text } from "@mantine/core";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const Home: NextPage = () => {
  console.log("Tip: Nothing should re-render the whole page.");

  return (
    <>
      <Head>
        <title>Supercharged Next.js App</title>
        <meta
          name="description"
          content="Generated from supercharged Next.js template."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Counter />
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Group position="center" mt="xl">
      <Button variant="light" onClick={() => setCount((count) => count + 1)}>
        <IconPlus />
      </Button>
      <Text>{count}</Text>
      <Button variant="light" onClick={() => setCount((count) => count - 1)}>
        <IconMinus />
      </Button>
    </Group>
  );
}

export default Home;
