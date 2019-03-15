import dashboardRoute from "pages/Dashboard/routes";
import { PageNotFound } from "pages/Exceptions/index";
import loginRoute from "pages/Login/routes";
// import { Exception } from "handlebars";
// import Applayout from "components/Layout/Applayout/index";
// import Dashboard from "pages/Dashboard/index";

const routes = [{
  path: '/',

  childRoutes: [

    // exceptionRoute,
    dashboardRoute,
    loginRoute,
    // Exceptions  
    { path: '*', name: 'Page not found', component: PageNotFound, not_found: true },
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}];




// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = route.childRoutes.find(child => child.isIndex);
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = '';
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
// export default [dashboardRoute, loginRoute];