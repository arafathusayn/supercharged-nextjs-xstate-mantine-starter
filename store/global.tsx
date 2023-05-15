import type { ReactNode } from "react";
import type { EmittedFrom } from "xstate";
import { createActorContext, shallowEqual } from "@xstate/react";

import appMachine from "@/statecharts/app-machine/config";

export const GlobalStateContext = createActorContext(appMachine);

export const useAppActor = GlobalStateContext.useActor.bind(GlobalStateContext);

export const useAppSelector = <T,>(
  selector: (emitted: EmittedFrom<typeof appMachine>) => T,
) => GlobalStateContext.useSelector(selector, shallowEqual);

export const useAppActorRef =
  GlobalStateContext.useActorRef.bind(GlobalStateContext);

interface Props {
  children: ReactNode;
}

export const GlobalStateProvider = ({ children }: Props) => {
  return <GlobalStateContext.Provider>{children}</GlobalStateContext.Provider>;
};
