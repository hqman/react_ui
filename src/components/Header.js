import React from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { Avatar, Divider, Dropdown, Icon, Layout, Menu, Radio } from 'antd';

import { AllLocalState, ToggleSider, ToggleIsBuy, Logout } from 'graphql/local.graphql'
import Logo from './Logo';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const { Header } = Layout



const AppHeader = ({ showLogo }) => {

  const [isBuy] = React.useState(true);

  const { data } = useQuery(AllLocalState);
  const toggle = useMutation(ToggleSider, {
    update: (proxy, mutationResult) => {
      // console.log(mutationResult);

    }
  });

  const handleLogout = useMutation(Logout, {
    update: (proxy, mutationResult) => {
      // console.log(mutationResult);

    }
  });

  const changeIsBuy = useMutation(ToggleIsBuy, {
    update: (proxy, mutationResult) => {
      // console.log(mutationResult);

    }
  });

  const avatarDropdown = (
    <Menu className="app-header-dropdown">
      <Menu.Item key="4" className="d-block d-md-none"> Signed in as <strong>admin</strong> </Menu.Item>
      <Menu.Divider className="d-block d-md-none" />
      <Menu.Item key="1" > <Icon type="setting" />Settings </Menu.Item>
      <Menu.Item key="0"> <a href="#/"><Icon type="info-circle-o" />About</a> </Menu.Item>
      <Menu.Item key="2"> <a href="#/"><Icon type="question-circle-o" />Need Help?</a> </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">

        <div
          onClick={handleLogout}
          role="presentation"
        >
          <Icon type="logout" />
          <span>退出</span>
        </div>

      </Menu.Item>
    </Menu>
  );
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


            <RadioGroup onChange={changeIsBuy} defaultValue={isBuy} buttonStyle="solid">
              <RadioButton value={true}>&nbsp;&nbsp;买&nbsp;&nbsp;</RadioButton>
              <RadioButton value={false}>&nbsp;&nbsp;卖&nbsp;&nbsp;</RadioButton>
            </RadioGroup>

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