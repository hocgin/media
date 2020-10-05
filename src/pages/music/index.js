import React from 'react';
import styles from './index.less';
import MusicCard from '@/components/MusicCard';
import {Col, Row, Typography} from 'antd';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
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
    this.loadMusic();
    ap.on('playing', this.onPlaying);
    ap.on('pause', this.onPause);
    ap.on('listswitch', this.onListswitch);
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
                  <Col xs={24} sm={8}>
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

  onClickMusic = (index) => {
    let {audio = []} = this.state;
    if (audio[index].selected) {
      ap.toggle();
    } else {
      ap.list.switch(index);
      ap.play();
    }
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

  onListswitch = ({index}) => {
    this.setState(({audio = []}) => {
      audio.map((item, i) => {
        item.selected = (i === index);
        return item;
      });

      return {
        audio: [...audio]
      }
    });
  };

  onPlaying = () => {
    this.setState(({audio = []}) => {
      audio.map(item => {
        item.played = !!item.selected;
        return item;
      });

      return {
        audio: [...audio]
      }
    });
  };

  onPause = () => {
    this.setState(({audio = []}) => {
      audio.map(item => {
        if (item.selected) {
          item.played = false;
        }
        return item;
      });

      return {
        audio: [...audio]
      }
    });
  };

  loadMusic = () => {
    musicList[0].selected = true;
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
