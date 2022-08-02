import {
  ActionMeta,
  ActionObject,
  assign,
  BaseActionObject,
  ContextFrom,
  EventFrom,
} from "xstate";
import { COLOR_SCHEME_KEY_FOR_STORAGE } from "../../../constants";
import appMachine from "../definition";

type Ctx = ContextFrom<typeof appMachine>;
type Evt = EventFrom<typeof appMachine>;

type Action =
  | ActionObject<Ctx, Evt>
  | ((
      context: Ctx,
      event: Evt,
      meta: ActionMeta<Ctx, Evt, BaseActionObject>,
    ) => void);

export const restoreColorScheme: Action = assign(() => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const colorScheme = localStorage.getItem(COLOR_SCHEME_KEY_FOR_STORAGE);

    const possibleValues: Ctx["colorScheme"][] = ["dark", "light"];

    if (
      colorScheme &&
      possibleValues.includes(colorScheme as Ctx["colorScheme"])
    ) {
      return {
        colorScheme,
      };
    } else if (
      typeof matchMedia !== "undefined" &&
      !matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return {
        colorScheme: "light",
      };
    } else {
      return {
        colorScheme: "dark",
      };
    }
  }

  return {};
});

export const changeColorScheme: Action = assign((_context, event) => {
  if (event.type === "COLOR_SCHEME_CHANGED") {
    return {
      colorScheme: event.data,
    };
  }

  return {};
});

export const storeColorScheme: Action = (_context, event) => {
  if (
    event.type === "COLOR_SCHEME_CHANGED" &&
    typeof localStorage !== "undefined"
  ) {
    const colorScheme = event.data;
    localStorage.setItem(COLOR_SCHEME_KEY_FOR_STORAGE, colorScheme);
  }
};

export const setNavOpen: Action = assign((_context, event) => {
  if (event.type === "OPENED_NAV") {
    return {
      isNavOpen: true,
    };
  }

  return {};
});

export const setNavClosed: Action = assign((_context, event) => {
  if (event.type === "CLOSED_NAV") {
    return {
      isNavOpen: false,
    };
  }

  return {};
});
