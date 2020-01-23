import React from 'react';
import styles from './index.less';
import classnames from 'classnames';
import { Avatar, Icon } from 'antd';
import Img from 'react-image';

class Index extends React.PureComponent {
  render() {
    let { src, wrapperClassName } = this.props;
    let prefix = this.getImagePrefix(src);
    return (
      <div className={classnames(styles.component, wrapperClassName)}>
        <article className={styles.imgWrapper}>
          <a href="#">
            <Img className={styles.img}
                 src={src}
                 unloader={this.renderUnloader()}
                 loader={this.renderLoader()}
                 alt="图片"/>
          </a>
        </article>
        {prefix !== '' && <div className={styles.indicator}>{prefix}</div>}
        <div className={styles.user}>
          <Avatar className={styles.avatar}
                  size="large"
                  icon="user"/>
          <div className={styles.meta}>
            <div className={styles.username}>hocgin</div>
            <div className={styles.more}>
              <span className={styles.camera}>
                <Icon type="camera" style={{ marginRight: 2 }}/> Apple iPhone XR/
              </span>
              <span className={styles.city}>厦门</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderUnloader = () => {
    return (<div style={{
      height: 400,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
      加载失败
    </div>);
  };

  renderLoader = () => {
    return (<div style={{
      height: 400,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
    </div>);
  };

  getImagePrefix = (src) => {
    let prefix = `${src}`;
    if (prefix.includes('.')) {
      let lastIndex = prefix.lastIndexOf('.');
      prefix = prefix.substr(lastIndex + 1);
    }
    if (prefix.length > 4) {
      prefix = '';
    }
    return prefix.toUpperCase();
  };
}

export default Index;
