import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import {
  AppShell,
  useMantineTheme,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import AppNavbar from "./navbar";
import AppFooter from "./footer";
import AppSidebar from "./sidebar";
import AppHeader from "./header";
import { GlobalStateContext } from "../../store/global";
import { useActor } from "@xstate/react";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShellComponent({ children }: AppShellProps) {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const { appService } = useContext(GlobalStateContext);
  const [state, send] = useActor(appService);

  const { context } = state;
  const { colorScheme: colorSchemeInContext } = context;

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const changedColorScheme =
        value || (colorScheme === "dark" ? "light" : "dark");

      setColorScheme(changedColorScheme);

      send({
        type: "COLOR_SCHEME_CHANGED",
        data: changedColorScheme,
      });
    },
    [colorScheme, send],
  );

  useEffect(() => {
    if (
      typeof colorSchemeInContext === "string" &&
      colorScheme !== colorSchemeInContext
    ) {
      toggleColorScheme(colorSchemeInContext);
    }
  }, [colorSchemeInContext, colorScheme, toggleColorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          styles={{
            main: {
              background:
                colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={<AppNavbar />}
          aside={<AppSidebar />}
          footer={<AppFooter />}
          header={<AppHeader />}
        >
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
