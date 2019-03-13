import Userlayout from "components/Layout/Userlayout/index";
import Login from "./index";

export default {
  name: "login",

  path: "login",

  component: Userlayout,

  childRoutes: [
    { name: "login", path: "", component: Login },
    // { name: "about me", path: "me", component: AboutMe }
  ]
};