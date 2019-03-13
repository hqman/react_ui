import React from 'react';
import { Layout } from 'antd';



const { Content } = Layout;

export default ({ children }) => {


  return (
    <Content id='app-content'>
      {children}
    </Content>
  )
}