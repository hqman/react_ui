import React from 'react';
import classnames from 'classnames';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from 'react-apollo-hooks';

import { AllLocalState, ToggleSider } from 'graphql/local.graphql'
import APPCONFIG from 'constants/config';

const { SubMenu } = Menu;
const { Sider } = Layout
const MenuItemGroup = Menu.ItemGroup;


const AppSider = () => {
  const { data } = useQuery(AllLocalState);
  const toggle = useMutation(ToggleSider);

  // 买 卖 菜单 状态切换
  return (
    <div className="app-sidenav-container">
      < Sider
        collapsible
        collapsed={data.collapsed}
        onCollapse={toggle}
        // collapsible
        // collapsed={collapsed}
        // onCollapse={toggle}
        trigger={null}
        id="app-sidenav"
        width={160}
        className="app-sidenav sidenav-bg-dark"

      >

        <section className={classnames('sidenav-header', 'bg-info')}>
          <a href="#/" className="brand">{APPCONFIG.brand}</a>
        </section>
        <div className="sidenav-content" >
          {data.isBuy ? (<Menu
            mode="vertical"
            // mode="inline"
            // inlineCollapsed={data.collapsed.value}
            // selectedKeys={["3"]}
            theme="dark"
          >
            <SubMenu key="sub0" title={<span><Icon type="mail" /><span>买</span></span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Iteom 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>

            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Nav One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Nav  Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>)
            :
            (<Menu
              mode="vertical"
              // mode="inline"
              // inlineCollapsed={data.collapsed.value}
              // selectedKeys={["3"]}
              theme="dark"
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>卖 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>卖 2</span>
              </Menu.Item>

              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Nav One</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Nav  Two</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>)




          }

        </div>
        <div className="sidenav-footer">
          <a href="#help">
            <Icon type="question-circle" />
            <span className="nav-text"><span>Help</span></span>
          </a>
        </div>
      </Sider ></div>)
}

export default AppSider;