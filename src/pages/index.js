import styles from './index.less';
import {Col, Icon, Row} from 'antd';
import {Link} from 'umi';
import React from 'react';
import classnames from 'classnames';

export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.metro}>
        <Row gutter={[10, 10]}>
          <Col sm={8}>
            <Link to="/music" className={classnames(styles.item, styles.item1)}>
              <Icon type="customer-service" className={styles.icon}/>
              <span>Music</span>
            </Link>
          </Col>
          <Col sm={16}>
            <Link to="/video" className={classnames(styles.item, styles.item2)}>
              <Icon type="video-camera" className={styles.icon}/>
              <span>Video</span>
            </Link>
          </Col>
        </Row>
        <Row gutter={[10, 10]}>
          <Col sm={8}>
            <Link to="/photo" className={classnames(styles.item, styles.item3)}>
              <Icon type="camera" className={styles.icon}/>
              <span>Photo</span>
            </Link>
          </Col>
          <Col sm={8}>
            <Link to="/book" className={classnames(styles.item, styles.item4)}>
              <Icon type="book" className={styles.icon}/>
              <span>Book</span>
            </Link>
          </Col>
          <Col sm={8}>
            <a href={'https://hocg.in'} className={classnames(styles.item, styles.item5)}>
              <Icon type="environment" className={styles.icon}/>
              <span>Me</span>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
