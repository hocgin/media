import React from 'react';
import styles from './index.less';
import Img from 'react-image';
import { Icon } from 'antd';
import classnames from 'classnames';

class Index extends React.PureComponent {

  render() {
    let { played = false, wrapperClassName, wrapperStyle } = this.props;
    return (
      <div className={classnames(styles.component, wrapperClassName)} style={wrapperStyle}>
        <div className={styles.logo}>
          <Img className={styles.image}
               unloader={this.renderUnloader()}
               loader={this.renderLoader()}
               src={'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg'}/>
          <div className={styles.btn}>
            {this.renderBtn(played)}
          </div>
        </div>
        <div className={styles.meta}>
          <h1 className={styles.title}>标题</h1>
          <div className={styles.viewer}>
            <span>@hocgin</span><span>10万+</span>
          </div>
        </div>
      </div>
    );
  }

  renderBtn = (played) => {
    return (played ? <Icon type="pause-circle" theme="filled"/> : <Icon type="play-circle" theme="filled"/>);
  };

  renderUnloader = () => {
    return (<div style={{
      height: 60,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
      加载失败
    </div>);
  };

  renderLoader = () => {
    return (<div style={{
      height: 60,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}>
    </div>);
  };
}

export default Index;
