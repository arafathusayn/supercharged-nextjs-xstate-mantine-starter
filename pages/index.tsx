import { Button, useMantineColorScheme } from "@mantine/core";
import { useActor } from "@xstate/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { GlobalStateContext } from "../store/global";

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { appService } = useContext(GlobalStateContext);
  const [state, send] = useActor(appService);
  const { context } = state;

  return (
    <>
      <Head>
        <title>Create Fast Next.js App</title>
        <meta
          name="description"
          content="Generated by create next app, enhanced by Arafat Husayn"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
