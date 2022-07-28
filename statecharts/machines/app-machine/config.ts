import machineDef from "./definition";
import {
  changeColorScheme,
  restoreColorScheme,
  storeColorScheme,
  setNavOpen,
  setNavClosed,
} from "./actions";
import {} from "./services";

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
