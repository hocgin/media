import React from 'react';
import styles from './index.less';
import VideoCard from '@/components/VideoCard';

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
        <div className={styles.videos}>
          {([1, 2, 3, 4, 5, 6, 7, 8, 10]).map((item) => (<a href={`/video/${item}`} style={{ color: 'unset' }}>
            <VideoCard wrapperClassName={styles.video}/>
          </a>))}
        </div>
      </div>
    );
  }
}

export default index;
