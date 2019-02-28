import React from "react";
import ReactDOM from "react-dom";

import { Row, Col } from "antd";

export const RowTest = props => {
  return (
    <Row gutter={16}>
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
      <Col span={6} />
    </Row>
  );
};
