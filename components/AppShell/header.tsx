import {
  Burger,
  Group,
  Header,
  MediaQuery,
  Stack,
  Text,
  useMantineTheme,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

import { useAppActor, useAppSelector } from "@/store/global";

const AppHeader = () => {
  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const [, send] = useAppActor();

  const isNavOpen = useAppSelector((state) => state.context.isNavOpen);

  return (
    <Header height={60} p="md">
      <Group position="left" spacing="xs">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={isNavOpen}
            onClick={() => {
              if (isNavOpen) {
                send({
                  type: "CLOSED_NAV",
                });
              } else {
                send({
                  type: "OPENED_NAV",
                });
              }
            }}
            size="sm"
            color={theme.colors.gray[6]}
          />
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ flexGrow: 1 }}>
          <Group position="center">
            <Stack spacing="xs">
              <Text>Supercharged Next.js App</Text>
            </Stack>
          </Group>
        </MediaQuery>

        <MediaQuery
          smallerThan="sm"
          styles={{ position: "absolute", right: "1rem" }}
        >
          <ActionIcon
            variant="light"
            color="gray"
            onClick={() => {
              toggleColorScheme();
            }}
            title="Toggle color scheme"
          >
            {colorScheme === "dark" ? (
              <IconSun size={18} />
            ) : (
              <IconMoonStars size={18} />
            )}
          </ActionIcon>
        </MediaQuery>
      </Group>
    </Header>
  );
};

export default AppHeader;
