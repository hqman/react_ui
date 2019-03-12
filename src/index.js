import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';


import { createBrowserHistory } from 'history';
import Root from "components/Root";
import client from "apolloConfig";

export const history = createBrowserHistory();


// import Main from "./layout";
// import { useExpire } from "./useExpire";

// // import Rowtest from "./menu";
// const Message = ({ expireDate }) => {
//   return useExpire(expireDate) ? <h1>test</h1> : null
//  expireDate={new Date(Date.now() + 2000)}
// }
const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router history={history}>
        <Root layout={1} />
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
