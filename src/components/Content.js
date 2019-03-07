
import React from 'react';
import { Layout } from 'antd';
import { PRODUCT_PAGE } from 'query';

import { useQuery } from 'react-apollo-hooks';

const { Content } = Layout;

const AppContent = () => {
  const { data, error, loading } = useQuery(PRODUCT_PAGE);
  console.log(data);

  return (
    <Content id='app-content'>
      <h3>AppContent  </h3>
      <div>{JSON.stringify(data)}</div>
      adsfasdf
    </Content>
  )
}

export default AppContent