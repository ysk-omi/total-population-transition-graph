import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.container}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
