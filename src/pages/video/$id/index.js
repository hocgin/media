import React from 'react';
import styles from './index.less';
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
import { Avatar, Divider } from 'antd';

let dp;

class index extends React.Component {
  componentDidMount() {
    dp = new DPlayer({
      container: document.getElementById('player'),
      screenshot: true,
      autoplay: true,
      video: {
        quality: [
          {
            name: 'HD',
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            type: 'auto',
          },
        ],
        defaultQuality: 0,
      },
      // 字幕
      subtitle: {},
      // 弹幕
      danmaku: {},
      // 进度条提示
      highlight: [],
      // 右键
      contextmenu: [],
    });
    // window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }


  render() {
    let {} = this.props;
    return (
      <div className={styles.page}>
        <div className={styles.watchFlexy}>
          <div className={styles.primary}>
            <div className={styles.primaryInner}>
              <div className={styles.playerContainer}>
                <div id="player" className={styles.player}/>
              </div>
              <div className={styles.info}>
                <h1 className={styles.title}>视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视</h1>
                <div className={styles.meta}>
                  <div>
                    <Avatar icon="user"/> hocgin
                  </div>
                  <div className={styles.videoViewer}>
                    <div>2020-01-22 08:42:37</div>
                    <div>7.4万播放 · 190弹幕</div>
                  </div>
                </div>
              </div>
              <Divider dashed />
            </div>
          </div>
          <div className={styles.secondary}>
            <div className={styles.secondaryInner}/>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
