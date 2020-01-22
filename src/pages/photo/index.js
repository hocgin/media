import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import Image from '@/components/Image';
import Img from 'react-image';

@connect((...rest) => {
  console.log('arg1', rest);
  return {};
}, (...rest) => {
  console.log('arg2', rest);
  return {};
})
class index extends React.Component {

  render() {
    let {} = this.props;
    let that = this;
    return (
      <div className={styles.page}>
        {/* HEAD */}
        <div className={styles.head} style={{ display: 'none' }}>
          <div className={styles.bg}>
            <Img className={styles.bgImage}
                 src={null} alt="背景"/>
          </div>
        </div>
        {/* HEAD */}
        {/*  BOX  */}
        <div className={styles.photos}>
          <div className={styles.photoColumn}>
            {([1, 2, 3]).map(() => <Image wrapperClassName={styles.photoImage} src={that.getOneImage()}/>)}
          </div>
          <div className={styles.photoColumn}>
            {([1, 2, 3]).map(() => <Image wrapperClassName={styles.photoImage} src={that.getOneImage()}/>)}
          </div>
          <div className={styles.photoColumn}>
            {([1, 2, 3]).map(() => <Image wrapperClassName={styles.photoImage} src={that.getOneImage()}/>)}
          </div>
          <div className={styles.photoColumn}>
            {([1, 2, 3]).map(() => <Image wrapperClassName={styles.photoImage} src={that.getOneImage()}/>)}
          </div>
        </div>
        {/*  BOX  */}
      </div>
    );
  }

  getOneImage(images = [
    'https://images.pexels.com/photos/3527542/pexels-photo-3527542.jpeg',
    'https://images.pexels.com/photos/3512846/pexels-photo-3512846.jpeg',
    'https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg',
    'https://images.pexels.com/photos/3576265/pexels-photo-3576265.jpeg',
  ]) {
    return images[parseInt(Math.random() * images.length)];
  }
}

export default index;
