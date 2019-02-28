import React from 'react';
import { Layout, Icon } from 'antd'
import { useQuery } from 'react-apollo-hooks';
import { SIDE_NAV_STATE, TOGGLE_SIDER } from 'query';
import { useMutation } from 'react-apollo-hooks';

const { Header } = Layout

const AppHeader = () => {
  const { data, error, loading } = useQuery(SIDE_NAV_STATE);
  const toggle = useMutation(TOGGLE_SIDER);

  return (
    <Header className="app-header">
      <Icon
        className="trigger"
        type={data.collapsed.value ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />

      <h3> header...</h3>

    </Header >
  )
}

export default AppHeader;