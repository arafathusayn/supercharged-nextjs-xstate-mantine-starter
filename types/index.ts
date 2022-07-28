export type AppContext = {
  colorScheme: "dark" | "light";
  isNavOpen: boolean;
};

export type AppEvent =
  | {
      type: "xstate.init";
    }
  | {
      type: "COLOR_SCHEME_CHANGED";
      data: AppContext["colorScheme"];
    }
  | {
      type: "OPENED_NAV";
    }
  | {
      type: "CLOSED_NAV";
    };
