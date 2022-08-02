import React, { createContext } from "react";
import { InterpreterFrom } from "xstate";
import { useInterpret } from "@xstate/react";
import appMachine from "../statecharts/app-machine/config";

export const GlobalStateContext = createContext({
  appService: {} as InterpreterFrom<typeof appMachine>,
});

interface Props {
  children: React.ReactNode;
}

export const GlobalStateProvider = ({ children }: Props) => {
  const appService = useInterpret(appMachine);

  return (
    <GlobalStateContext.Provider value={{ appService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
