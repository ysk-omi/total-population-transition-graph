import styles from '../styles/Header.module.scss';
import { NextPage } from 'next';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.icon}>🌐</span>人口推移グラフ
      </h1>
    </header>
  );
};
export default Header;
