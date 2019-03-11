import React from 'react';
import App from './Applayout/App';
// import 'styles/debug.css';
// import { Layout } from 'antd';
// import "antd/dist/antd.css";
import App2 from './Applayout/App2';
// import 顺序 很重要 否则 theme 不起作用
import '../styles/antd.less';
import "styles/bootstrap/bootstrap.scss";
import "styles/styles.scss";
import "styles/vendors.scss"



const Root = ({ layout }) => {
  console.log(layout);

  if (layout === 2) {
    return <App2 />
  } else {
    return <App />
  }
}
export default Root
