import React from 'react';
import styles from './index.less';
import MusicCard from '@/components/MusicCard';
import { Col, Row, Typography } from 'antd';
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import classnames from 'classnames';
import Colors from '@/utils/colors';

const { Title } = Typography;

let ap;

class index extends React.Component {
  state = {
    // 播放器Y轴位置
    playerMaxY: 10,
    fixedPlayer: false,
  };

  columns = [{
    title: '名次',
    dataIndex: 'index',
  }, {
    title: '歌曲',
    dataIndex: 'name',
  }, {
    title: '歌手',
    dataIndex: 'artist',
  }];
  data = [{
    'index': 1,
    'artist': '作家',
    'name': '歌曲',
  }];

  componentDidMount() {
    ap = new APlayer({
      container: document.getElementById('player'),
      listMaxHeight: 90,
      lrcType: 3,
      listFolded: true,
      audio: [{
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        name: '音乐名称',
        artist: '作家',
        type: 'auto',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
      }, {
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        name: '音乐名称',
        artist: '作家',
        type: 'auto',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
      }],
    });
    window.addEventListener('scroll', this.onPageScroll);
  }

  componentWillUnmount() {
    ap = null;
    window.removeEventListener('scroll', this.onPageScroll);
  }


  render() {
    let {} = this.props;
    let { fixedPlayer } = this.state;
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
          {[4, 3, 4, 2].map((_, index) => {
            return (<>
              <Row gutter={[16, 16]}>
                <Title level={3} style={{ margin: 8 }}>h2. Ant Design</Title>
              </Row>
              <Row gutter={[{ xs: 5, sm: 16 }, { xs: 5, sm: 16 }]}>
                {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2].map((_, index) => (
                  <Col xs={12} sm={6}>
                    <MusicCard played={true} wrapperStyle={{backgroundColor: Colors.getRgbaColor(index)}}/>
                  </Col>
                ))}
              </Row>
            </>);
          })}
        </div>
      </div>
    );
  }

  onPageScroll = (event) => {
    let { playerMaxY } = this.state;
    // 滚动的高度
    const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 视窗高度
    const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
    // 距离页面底部的高度
    const height = scrollHeight - scrollTop - clientHeight;
    // 判断距离页面底部的高度
    if (scrollTop >= playerMaxY) {
      this.setFixedPlayer(true);
    } else {
      this.setFixedPlayer(false);
    }
  };

  setFixedPlayer = (bool = false) => {
    this.setState({
      fixedPlayer: bool,
    });
  };
}

export default index;
