import gql from 'graphql-tag';

//  主菜单 展示 状态
const SIDE_NAV_STATE = gql`
  {
    collapsed {
      value
    }
    isBuy {
      value
    }
  }
`
const TOGGLE_SIDER = gql`
  mutation toggleSider {
    toggleSider @client
  }
`;



const ISBUY_STATE = gql`
  {
    isBuy {
      value
    }
  }
`
const TOGGLE_ISBUY = gql`
  mutation toggleIsBuy {
    toggleIsBuy @client
  }
`;




const PRODUCT_PAGE = gql`
{
  productPage{
    items{
      id
      name
    }
  }
}`

export { SIDE_NAV_STATE, TOGGLE_SIDER, PRODUCT_PAGE, ISBUY_STATE, TOGGLE_ISBUY }