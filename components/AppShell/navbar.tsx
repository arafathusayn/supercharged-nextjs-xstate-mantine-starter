import { Navbar, Stack, Text } from "@mantine/core";

import { useAppSelector } from "@/store/global";

const AppNavbar = () => {
  const isNavOpen = useAppSelector((state) => state.context.isNavOpen);

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isNavOpen}
      width={{ sm: 200, lg: 300 }}
    >
      <Stack>
        <Text color="gray">(Navigation)</Text>
      </Stack>
    </Navbar>
  );
};

export default AppNavbar;
