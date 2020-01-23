import React from 'react';
import styles from './index.less';
import classnames from 'classnames';
import Img from 'react-image';
import { Avatar } from 'antd';

class Index extends React.PureComponent {
  render() {
    let { wrapperClassName } = this.props;
    return (
      <div className={classnames(styles.component, wrapperClassName)}>
        <div className={styles.image}>
          <Img
            unloader={this.renderUnloader()}
            loader={this.renderLoader()}
            src="https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg"
            alt="图片"/>
          <span className={styles.totalTime}>4:34</span>
        </div>
        <h1 className={styles.title}>标题</h1>
        <div className={styles.meta}>
          <span>
            <Avatar icon="user" size="small"/> hocgin
          </span>
          <div className={styles.videoViewer}>
            25分钟前 · 7.4万播放
          </div>
        </div>
      </div>
    );
  }

  renderUnloader = () => {
    return (<div style={{
      height: 190,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
      加载失败
    </div>);
  };

  renderLoader = () => {
    return (<div style={{
      height: 190,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
    </div>);
  };
}

export default Index;
