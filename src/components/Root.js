import React from 'react'
import App from './Applayout/App'
import App2 from './Applayout/App2'
import { Layout } from 'antd';

const Root = ({ layout }) => {
  console.log(layout);

  if (layout == 2) {
    return <App2 />
  } else {
    return <App />
  }
}
export default Root
