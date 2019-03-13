import React from "react";
import { Route, Switch } from "react-router-dom";
import _ from "lodash";


const renderRouteConfig = (routes, contextPath) => {
  // Resolve route config object in React Router v3.
  let children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    // console.log("item", item);

    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, "/");
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props => (
            <item.component {...props}>{childRoutes}</item.component>
          )}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(
        <Route
          key={newContextPath}
          component={item.component}
          path={newContextPath}
          exact
        />
      );
    } else if (item.childRoutes) {
      _.forEach(item.childRoutes, r => renderRoute(r, newContextPath));
    }
  };

  _.forEach(routes, item => renderRoute(item, contextPath));
  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}


export default renderRouteConfig;
