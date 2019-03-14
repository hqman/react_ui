import Applayout from "components/Layout/Applayout/index";
import Dashboard from "./index";

export default {
  name: "dashboard",
  path: "/",
  component: Applayout,
  childRoutes: [
    { name: "home", path: "dashboard", component: Dashboard, exact: true, isIndex: true },
    // { name: "dashboard2", path: "dashboard", component: Dashboard },
  ]
};