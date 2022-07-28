import { useContext } from "react";
import { Navbar, Stack, Text } from "@mantine/core";
import { GlobalStateContext } from "../../store/global";
import { useActor } from "@xstate/react";

const AppNavbar = () => {
  const { appService } = useContext(GlobalStateContext);
  const [state, _send] = useActor(appService);
  const { context } = state;
  const { isNavOpen } = context;

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
