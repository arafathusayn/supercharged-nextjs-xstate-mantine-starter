import machineDef from "@/statecharts/app-machine/definition";
import {
  changeColorScheme,
  restoreColorScheme,
  storeColorScheme,
  setNavOpen,
  setNavClosed,
} from "@/statecharts/app-machine/actions";
import {} from "@/statecharts/app-machine/services";

export default machineDef.withConfig({
  actions: {
    restoreColorScheme,
    changeColorScheme,
    storeColorScheme,

    setNavOpen,
    setNavClosed,
  },
  services: {},
});
