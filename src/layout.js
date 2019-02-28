import React from "react";

import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default function Main() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
