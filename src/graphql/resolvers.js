import gql from 'graphql-tag';
import { SiderCollapsed, IsBuy } from 'graphql/local.graphql'

export const typeDefs = gql`
extend type Query{
      collapsed:Boolean!,
       isBuy: Boolean!,
      isLoggedIn: Boolean!

}
extend type Mutation{
 toggleSider:String,
 toggleIsBuy:String ,
 logout:Boolean!
}
`

export const resolvers = {
  Mutation: {
    toggleSider: (_, args, { cache }) => {
      const { collapsed } = cache.readQuery({
        query: SiderCollapsed
      });

      cache.writeData({ data: { collapsed: !collapsed } });
      return 'ok';
    },
    toggleIsBuy: (_, args, { cache }) => {

      const { isBuy } = cache.readQuery({
        query: IsBuy
      });
      cache.writeData({ data: { isBuy: !isBuy } });
      return 'ok';
    }, logout: (_, args, { cache }) => {
      cache.writeData({ data: { isLoggedIn: false } });
      localStorage.clear();
      return true;
    }
  }
}