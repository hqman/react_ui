import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';


import { createBrowserHistory } from 'history';
import client from "graphql/apolloConfig";

import renderRouteConfig from "utils/router";
import routeConfig from "routeConfig";




export const history = createBrowserHistory();

// 动态生成路由 Switch and Routes 
const chlidren = renderRouteConfig(routeConfig, "/");

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router history={history}>
        {chlidren}
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
