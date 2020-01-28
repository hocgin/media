import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <a href="/photo">图片s</a><br/>
      <a href="/video">视频s</a><br/>
      <a href="/music">音乐s</a><br/>
    </div>
  );
}
