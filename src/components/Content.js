
import React from 'react';
import { Layout } from 'antd';
import { PRODUCT_PAGE } from 'query';

import { useQuery } from 'react-apollo-hooks';
import Dashboard from 'pages/Dashboard/index';
import { Route } from 'react-router-dom'


const { Content } = Layout;

const AppContent = () => {
  const { data } = useQuery(PRODUCT_PAGE);
  console.log(data);

  return (
    <Content id='app-content'>
      <Route
        path='/dash'
        component={Dashboard}
      />
    </Content>
  )
}
export default AppContent