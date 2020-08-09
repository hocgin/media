import React from 'react';
import styles from './index.less';
import Img from 'react-image';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import classnames from 'classnames';

class Index extends React.PureComponent {
  canvasRef = React.createRef();

  render() {
    let {played, cover, name, artist, onClickButton, desc, wrapperClassName, wrapperStyle} = this.props;
    return (
      <div className={classnames(styles.component, wrapperClassName)} style={wrapperStyle}>
        <div className={styles.logo}>
          <Img className={classnames(styles.image, {
            [styles.played]: played
          })} unloader={this.renderUnloader()}
               loader={this.renderLoader()}
               src={cover}/>
          <div className={styles.btn} onClick={onClickButton}>
            {this.renderBtn(played)}
          </div>
        </div>
        <div className={styles.meta}>
          <h1 className={styles.title}>{`${name} - ${artist}`}</h1>
          <div className={styles.desc}>{desc}</div>
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
    }}/>);
  };

  renderLoader = () => {
    return (<div style={{
      height: 60,
      width: '100%',
      backgroundColor: '#DEE1E5',
    }}/>);
  };

  static propTypes = {
    played: PropTypes.bool,
    cover: PropTypes.string,
    desc: PropTypes.string,
    name: PropTypes.string,
    onClickButton: PropTypes.func,
  };
  static defaultProps = {
    played: false,
    cover: null,
    name: '未知音频',
    artist: '未知作家',
    onClickButton: () => {
    }
  };
}

export default Index;
