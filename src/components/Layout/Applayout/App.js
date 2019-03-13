import React from 'react';
import { Layout } from 'antd';
import AppContent from 'components/Content';
import AppFooter from 'components/Footer';
import AppHeader from 'components/Header';
import AppSider from 'components/Sider';


import 'styles/antd.less';
import "styles/bootstrap/bootstrap.scss";
import "styles/styles.scss";
import "styles/vendors.scss"


const App = () => {
  return (
    <Layout className='fixed-sidenav' id="app-layout">
      <AppSider />
      <Layout className="fixed-height">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>

    </Layout>
  )
}
export default App
