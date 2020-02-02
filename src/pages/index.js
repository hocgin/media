import styles from './index.less';
import { Col, Icon, Row } from 'antd';
import React from 'react';
import classnames from 'classnames';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.metro}>
        <Row gutter={[10, 10]}>
          <Col sm={8}>
            <a href="/music" className={classnames(styles.item, styles.item1)}>
              <Icon type="customer-service" className={styles.icon}/>
              <span>Music</span>
            </a>
          </Col>
          <Col sm={16}>
            <a href="/video" className={classnames(styles.item, styles.item2)}>
              <Icon type="video-camera" className={styles.icon}/>
              <span>Video</span>
            </a>
          </Col>
        </Row>
        <Row gutter={[10, 10]}>
          <Col sm={8}>
            <a href="/photo" className={classnames(styles.item, styles.item3)}>
              <Icon type="camera" className={styles.icon}/>
              <span>Photo</span>
            </a>
          </Col>
          <Col sm={8}>
            <a href="/book" className={classnames(styles.item, styles.item4)}>
              <Icon type="book" className={styles.icon}/>
              <span>Book</span>
            </a>
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
