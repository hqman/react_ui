import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import gql from "graphql-tag";

// import "antd/dist/antd.css";
import './styles/antd.less'
import "./styles/styles.scss";
import Root from "./components/Root";


const AUTH_TOKEN = 'token'
//从local取 当前管理公司信息
export const get_current_company = () => {
  const company_object = localStorage.getItem('current_company')
  if (company_object) {
    return JSON.parse(company_object)
  }
  return null
}
let currentCompanyId = get_current_company() ? get_current_company().id : null
const httpLink = new HttpLink({ uri: 'http://localhost:5000/graphql' })
const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // debugger
  if (tokenValue) {
    // return the headers to the context so httpLink can read them
    operation.setContext({
      headers: {
        Authorizationjwt_required: `Bearer ${tokenValue}`,
        company_id: currentCompanyId ? currentCompanyId : 0,
      },
    })
  }


  return forward(operation)
})

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

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
        return 'ok';
      }
    }
  },
  defaults: {
    collapsed: {
      __typename: "CollapsedSider",
      value: false
    }
  }
});



const links = split(
  // split based on operation type
  stateLink,
  httpLinkAuth,
)

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, httpLinkAuth])
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
      <Root layout={1} />
    </ApolloHooksProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
