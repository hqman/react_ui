import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from "apollo-client";

import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from "apollo-link";
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import gql from "graphql-tag";

import "antd/dist/antd.css";
import "./styles.scss";
import Root from "./components/Root";

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      toggleSider: (_, args, { cache }) => {

        const { collapsed } = cache.readQuery({
          query: gql`
            {
              collapsed {
                value
              }
            }
          `
        });

        const data = {
          collapsed: {
            __typename: "CollapsedSider",
            value: !collapsed.value
          }
        };

        cache.writeData({ data });
        return null;
      }
    }
  },
  defaults: {
    collapsed: {
      __typename: "CollapsedSider",
      value: true
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink()])
});
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
      <Root />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
