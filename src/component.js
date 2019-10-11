import React from 'react';
import 'antd/dist/antd.less';
import {
  Row,
  Col,
  Switch,
} from 'antd';
import style from './style.less';

export default () => (
  <div className={style.content}>
    <Row>
      <Col span={20}>
        <p>
          Extension Power:
        </p>
      </Col>
      <Col span={4}>
        <Switch />
      </Col>
    </Row>
  </div>
);
