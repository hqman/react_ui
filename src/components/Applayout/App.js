import { Layout } from 'antd';
import AppContent from 'components/Content';
import AppFooter from 'components/Footer';
import AppHeader from 'components/Header';
import AppSider from 'components/Sider';
import React from 'react';




const App = () => {
  return (
    <Layout className='fixed-sidenav'>
      <AppSider />
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>

    </Layout>
  )
}
export default App
