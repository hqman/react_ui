import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import gql from "graphql-tag";



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
      },
      toggleIsBuy: (_, args, { cache }) => {

        const { isBuy } = cache.readQuery({
          query: gql`
            {
              isBuy  {
                value
              }
            }
          `
        });

        const data = {
          isBuy: {
            __typename: "IsBuy",
            value: !isBuy.value
          }
        };

        cache.writeData({ data });
        return 'ok';
      }
    }
  },
  defaults: {
    collapsed: {
      __typename: "collapsed",
      value: false
    }, isBuy: {
      __typename: "IsBuy",
      value: true
    }

  }
});



const links = split(
  // split based on operation type
  stateLink,
  httpLinkAuth,
)

const client = new ApolloClient({
  // connectToDevTools: true,
  cache,
  link: ApolloLink.from([stateLink, httpLinkAuth])
});

export default client;