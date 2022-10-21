import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';
import { NextPage } from 'next';

type Props = {
  children?: React.ReactNode;
};

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.container}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
