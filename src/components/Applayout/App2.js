import React, { Component } from 'react'
import { Layout } from 'antd'
import AppSider from 'components/Sider/index2';
import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';
import AppContent from 'components/Content'

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
