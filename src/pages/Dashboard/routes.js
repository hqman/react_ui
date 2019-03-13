import Applayout from "components/Layout/Applayout/index";
import Dashboard from "./index";

export default {
  name: "dashboard",
  path: "dashboard",
  component: Applayout,
  childRoutes: [
    { name: "dashboard", path: "", component: Dashboard },
  ]
};
