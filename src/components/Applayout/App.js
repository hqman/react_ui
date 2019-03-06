import React, { Component } from 'react'
import { Layout } from 'antd'
import AppSider from 'components/Sider';
import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';
import AppContent from 'components/Content'




const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
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
