import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http';
import { resolvers, typeDefs } from './resolvers';


const cache = new InMemoryCache();
const tokenValue = localStorage.getItem('token')
const currentCompanyId = localStorage.getItem('current_company_id')
// console.log(currentCompanyId ? currentCompanyId : 0);

const client = new ApolloClient({
  cache,
  // httpLinkAuth,
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
    headers: {
      Authorization: `Bearer ${tokenValue}`,
      company_id: currentCompanyId ? currentCompanyId : 0,
      'client-name': 'smq[pc_client]',
      'client-version': '1.0.0',
    },
  }),
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    isLoggedIn:!!tokenValue,
    isBuy: true,
    collapsed: false
  },
});

export default client;