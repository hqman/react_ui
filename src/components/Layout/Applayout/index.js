import React from 'react';
import { Layout } from 'antd';
// import AppContent from 'components/Content';
import AppFooter from 'components/Footer';
import AppHeader from 'components/Header';
import AppSider from 'components/Sider';

// import { Layout } from 'antd';
import 'styles/antd.less';
import "styles/bootstrap/bootstrap.scss";
import "styles/styles.scss";
import "styles/vendors.scss"
const { Content } = Layout;

const App = ({ children }) => {
  return (
    <Layout className='fixed-sidenav' id="app-layout">
      <AppSider />
      <Layout className="fixed-height">
        <AppHeader />
        <Content id='app-content'>
          {children}
        </Content>
        <AppFooter />
      </Layout>

    </Layout>
  )
}
export default App

// export default Userlayout;
// const Applayout = ({ layout }) => {
//   // console.log('xxxxxxxxxxß');dd

//   const { history, location, match } = useReactRouter();
//   const { data, error, loading } = useQuery(IsLoggedIn);
//   if (!data.isLoggedIn) {
//     return history.push('/login');
//   }
//   return <AppContent layout={layout} />

//   // return (
//   //   <Query query={IsLoggedIn}>
//   //     {({ data }) => {
//   //       if (data.isLoggedIn) {
//   //         return <AppContent layout={layout} />
//   //       } else {
//   //         console.log("data.isLoggedIn,....", data.isLoggedIn);
//   //         return <h1>test</h1>
//   //         // return <Redirect to='/login' />
//   //         // return <Login />
//   //       }
//   //     }
//   //     }
//   //   </Query>
//   // )
// }
// export default Applayout