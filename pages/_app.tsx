import { AppProps } from "next/app";

import "../styles/globals.css";
import AppShellComponent from "../components/AppShell";
import { GlobalStateProvider } from "../store/global";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <GlobalStateProvider>
      <AppShellComponent>
        <Component {...pageProps} />
      </AppShellComponent>
    </GlobalStateProvider>
  );
}
