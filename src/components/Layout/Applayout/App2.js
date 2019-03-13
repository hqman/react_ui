import { Layout } from 'antd';
import AppContent from 'components/Content';
import AppFooter from 'components/Footer';
import AppHeader from 'components/Header';
import AppSider from 'components/Sider/index2';
import React from 'react';

const { Content } = Layout


const App2 = () => {
  return (
    <Layout>
      <AppHeader showLogo={true} />
      <Content>
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Content>
      <AppFooter />
    </Layout>
  )
}
export default App2
