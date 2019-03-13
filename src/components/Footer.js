import { Layout, Icon } from 'antd';
import React from 'react';
import APPCONFIG from 'constants/config';

const { Footer } = Layout;


const AppFooter = () => (
  <Footer className="app-footer app-footer-custom">
    <div className="footer-inner">

      <span className="small">
        © {APPCONFIG.year} <a className="brand"
          href={APPCONFIG.productLink}>{APPCONFIG.brand}</a>
      </span>
      <span className="small">
        Built with Love <Icon type="heart-o" />
      </span>
    </div>
  </Footer>

)

export default AppFooter;