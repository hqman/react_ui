import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';


import { createBrowserHistory } from 'history';
import client from "graphql/apolloConfig";

import routeConfig from "commons/routeConfig";
// import renderRouteConfigV3 from "commons/renderRoutes";
import renderRouteConfig from "commons/renderRoutes";


export const history = createBrowserHistory();

// 动态生成路由 Switch and Routes 
const children = renderRouteConfig(routeConfig, "/");
console.log(children);
// debugger
const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router history={history}>
        {children}
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
