import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http';
import { resolvers, typeDefs } from './resolvers';


const cache = new InMemoryCache();
const tokenValue = localStorage.getItem('token')
const currentCompanyId = localStorage.getItem('currentCompanyId')

const IsProduct = process.env.NODE_ENV === 'production';
// console.log("IsProduct : ", IsProduct, process.env.NODE_ENV);
const devServer = 'http://localhost:5000/graphql';
const proServer = 'http://smqsmqsmq.net/graphql';

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: IsProduct ? proServer : devServer,
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

// init app cache 
//isLoggedIn 登录状态  isBuy 买卖选择  collapsed 菜单是否折叠
cache.writeData({
  data: {
    isLoggedIn: !!tokenValue,
    isBuy: true,
    collapsed: false
  },
});

export default client;