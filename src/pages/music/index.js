import React from 'react';
import styles from './index.less';
import MusicCard from '@/components/MusicCard';
import {Col, Row, Typography} from 'antd';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import classnames from 'classnames';
import Colors from '@/utils/colors';
import musicList from '@/pages/music/music.json'

const {Title} = Typography;

let ap;
let analyser;

class index extends React.Component {
  state = {
    // 播放器Y轴位置
    playerMaxY: 100,
    fixedPlayer: false,
    audio: []
  };

  componentDidMount() {
    ap = new APlayer({
      container: document.getElementById('player'),
      listMaxHeight: 90,
      lrcType: 3,
      listFolded: true,
      audio: [],
    });

    window.addEventListener('scroll', this.onPageScroll);
    ap.on('playing', this.onPlaying);
    this.loadMusic();
  }

  componentWillUnmount() {
    ap = null;
    window.removeEventListener('scroll', this.onPageScroll);
  }


  render() {
    let {} = this.props;
    let {fixedPlayer, audio = []} = this.state;
    return (
      <div className={styles.page}>
        <div className={classnames({
          [styles.fixedBox]: fixedPlayer,
        })}>
          <div className={classnames(styles.playerContainer)}>
            <div id="player"/>
          </div>
        </div>
        <div className={classnames(styles.musics)}>
          {[1].map((_, index) => {
            return (<>
              <Row gutter={[16, 16]}>
                <Title level={3} style={{margin: 8}}>h2. Ant Design</Title>
              </Row>
              <Row gutter={[{xs: 5, sm: 16}, {xs: 5, sm: 16}]}>
                {(audio || []).map(({played, cover, name, desc}, index) => (
                  <Col xs={12} sm={8}>
                    <MusicCard played={played} cover={cover} name={name} desc={desc}
                               onClickButton={this.onClickMusic.bind(this, index)}
                               wrapperStyle={{backgroundColor: Colors.getRgbaColor(index)}}/>
                  </Col>
                ))}
              </Row>
            </>);
          })}
        </div>
      </div>
    );
  }

  onClickMusic = (key) => {
    this.setState(({audio = []}) => {
      let oldPlayed = audio[key].played;
      audio.map(item => {
        item.played = false;
        return item;
      });
      audio[key].played = !oldPlayed;

      if (audio[key].played) {
        ap.list.switch(key);
        ap.play();
      } else {
        ap.pause();
      }

      return {
        audio: [...audio]
      }
    })
  };

  onPageScroll = (event) => {
    let {playerMaxY} = this.state;
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || window.pageYOffset
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight)
      || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight)
      || document.body.scrollHeight;
    // 距离页面底部的高度
    const height = scrollHeight - scrollTop - clientHeight;
    // 判断距离页面底部的高度
    if (scrollTop >= playerMaxY) {
      this.setFixedPlayer(true);
    } else {
      this.setFixedPlayer(false);
    }
  };

  onPlaying = () => {
    console.log('播放');
  };

  loadMusic = () => {
    this.setState({
      audio: [...musicList]
    })
    ap.list.add([...musicList]);
  };

  setFixedPlayer = (bool = false) => {
    this.setState({
      fixedPlayer: bool,
    });
  };
}

export default index;
