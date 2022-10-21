import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.icon}>🌐</span>人口推移グラフ
      </h1>
    </header>
  );
}
