import React from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { Avatar, Divider, Dropdown, Icon, Layout, Menu } from 'antd';

import { SIDE_NAV_STATE, TOGGLE_SIDER } from 'query';
import Logo from './Logo';


const { Header } = Layout

const avatarDropdown = (
  <Menu className="app-header-dropdown">
    <Menu.Item key="4" className="d-block d-md-none"> Signed in as <strong>Admin</strong> </Menu.Item>
    <Menu.Divider className="d-block d-md-none" />
    <Menu.Item key="1" disabled> <Icon type="setting" />Settings </Menu.Item>
    <Menu.Item key="0"> <a href='#/'><Icon type="info-circle-o" />About</a> </Menu.Item>
    <Menu.Item key="2"> <a href='#/'><Icon type="question-circle-o" />Need Help?</a> </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3"> <a href='#/'><Icon type="logout" />Sign out</a> </Menu.Item>
  </Menu>
);

const AppHeader = ({ showLogo }) => {
  const { data } = useQuery(SIDE_NAV_STATE);
  const toggle = useMutation(TOGGLE_SIDER, {
    update: (proxy, mutationResult) => {
      console.log(mutationResult);

    }
  });

  return (
    <Header className="app-header">
      <div className=" app-header-inner bg-info">
        <div className="header-left">
          <div className="list-unstyled list-inline">
            {
              showLogo && [
                <Logo key="logo" />,
                <Divider type="vertical" key="line" />,
              ]
            }
            <a href='#/' className="list-inline-item d-none d-md-inline-block"
              onClick={toggle}>
              <Icon type={data.collapsed.value ? 'menu-unfold' : 'menu-fold'} className="list-icon" />
            </a>
          </div>


        </div>
        <div className="header-right">
          <Dropdown className="list-inline-item" overlay={avatarDropdown} trigger={['click']} placement="bottomRight">
            <a className="ant-dropdown-link no-link-style" href='#/'>
              <Avatar src="" size="small" />
              <span className="avatar-text d-none d-md-inline">Admin</span>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header >
  )
}

export default AppHeader;