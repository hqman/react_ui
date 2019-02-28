import gql from 'graphql-tag';

const SIDE_NAV_STATE = gql`
  {
    collapsed {
      value
    }
  }
`
const TOGGLE_SIDER = gql`
  mutation toggleSider {
    toggleSider @client
  }
`;

export { SIDE_NAV_STATE, TOGGLE_SIDER }