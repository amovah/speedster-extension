import React, { useState } from 'react';
import 'antd/dist/antd.less';
import {
  Row,
  Col,
  Switch,
} from 'antd';
import style from './style.less';
import {
  save as saveDB,
  get as getDB,
} from './db';

function changeExtensionStatus(changeStatus) {
  return async (newStatus) => {
    await saveDB({
      ...getDB(),
      status: newStatus,
    });

    changeStatus(newStatus);
  };
}

export default () => {
  const [status, changeStatus] = useState(getDB().status);

  return (
    <div className={style.content}>
      <Row>
        <Col span={20}>
          <p>
          Turn Off/On Extension:
          </p>
        </Col>
        <Col span={4}>
          <Switch
            defaultChecked={status}
            onChange={changeExtensionStatus(changeStatus)}
          />
        </Col>
      </Row>
    </div>
  );
};
