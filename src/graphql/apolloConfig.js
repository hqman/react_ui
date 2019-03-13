import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import { resolvers, typeDefs } from './resolvers';


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

const client = new ApolloClient({
  cache,
  httpLinkAuth,
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    isBuy: true,
    collapsed: false
  },
});

export default client;