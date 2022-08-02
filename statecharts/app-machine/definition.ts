import { createMachine } from "xstate";
import { AppContext, AppEvent } from "../../types/index";

const appMachine = createMachine({
  id: "App",
  strict: true,
  initial: "AppStarted",
  context: {} as AppContext,
  on: {
    COLOR_SCHEME_CHANGED: {
      actions: ["changeColorScheme", "storeColorScheme"],
    },
    OPENED_NAV: {
      actions: ["setNavOpen"],
    },
    CLOSED_NAV: {
      actions: ["setNavClosed"],
    },
  },
  tsTypes: {} as import("./definition.typegen").Typegen0,
  schema: {
    events: {} as AppEvent,
  },
  states: {
    AppStarted: {
      entry: ["restoreColorScheme"],
      on: {},
    },
  },
});

export default appMachine;
