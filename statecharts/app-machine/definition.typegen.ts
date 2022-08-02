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
      | "storeColorScheme"
      | "setNavOpen"
      | "setNavClosed"
      | "restoreColorScheme";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    changeColorScheme: "COLOR_SCHEME_CHANGED";
    storeColorScheme: "COLOR_SCHEME_CHANGED";
    setNavOpen: "OPENED_NAV";
    setNavClosed: "CLOSED_NAV";
    restoreColorScheme: "xstate.init";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "AppStarted";
  tags: never;
}
