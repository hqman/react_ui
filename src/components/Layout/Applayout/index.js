import React from 'react';
import App from './App';

import App2 from './App2';

const Applayout = ({ layout }) => {

  if (layout === 2) {
    return <App2 />
  } else {
    return <App />
  }
}
export default Applayout