import { Aside, Text, MediaQuery } from "@mantine/core";

const AppSidebar = () => {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <Text color="gray">(Sidebar)</Text>
      </Aside>
    </MediaQuery>
  );
};

export default AppSidebar;
