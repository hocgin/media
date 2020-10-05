import React from 'react';
import styles from './index.less';
import VideoCard from '@/components/VideoCard';
import classnames from 'classnames';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

class index extends React.Component {

  componentDidMount() {
    // window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }


  render() {
    let {} = this.props;
    return (
      <div className={styles.page}>

        <div className={classnames(styles.videos)}>
          {[4, 3, 4, 2].map((_, index) => {
            return (<>
              <Row gutter={[16, 16]}>
                <Title level={3} style={{ margin: 8 }}>h2. Ant Design</Title>
              </Row>
              <Row gutter={[{ xs: 5, sm: 16 }, { xs: 10, sm: 32 }]}>
                {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2].map((id, index) => (
                  <Col xs={24} sm={6}>
                    <a href={`/video/detail?vid=${id}`} style={{ color: 'unset' }}>
                      <VideoCard wrapperClassName={styles.video}/>
                    </a>
                  </Col>
                ))}
              </Row>
            </>);
          })}
        </div>
      </div>
    );
  }
}

export default index;
