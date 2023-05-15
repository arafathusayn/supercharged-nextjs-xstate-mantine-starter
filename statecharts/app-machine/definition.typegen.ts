// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions:
      | "changeColorScheme"
      | "restoreColorScheme"
      | "setNavClosed"
      | "setNavOpen"
      | "storeColorScheme";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    changeColorScheme: "COLOR_SCHEME_CHANGED";
    restoreColorScheme: "xstate.init";
    setNavClosed: "CLOSED_NAV";
    setNavOpen: "OPENED_NAV";
    storeColorScheme: "COLOR_SCHEME_CHANGED";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates: "AppStarted";
  tags: never;
}
