import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <span className={styles.title}>API:</span>
          <a href='https://resas.go.jp/#/13/13101' target='_blank' rel='noopener noreferrer'>
            RESAS - 地域経済分析システム
          </a>
        </li>
        <li>
          <span className={styles.title}>Tech:</span>
          <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
            Next.js
          </a>{' '}
          /{' '}
          <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
            TypeScript
          </a>{' '}
          /{' '}
          <a href='https://sass-lang.com/' target='_blank' rel='noopener noreferrer'>
            Sass
          </a>{' '}
          /{' '}
          <a href='https://eslint.org/' target='_blank' rel='noopener noreferrer'>
            ESlint
          </a>{' '}
          /{' '}
          <a href='https://prettier.io/' target='_blank' rel='noopener noreferrer'>
            Prettier
          </a>
        </li>
        <li>
          <span className={styles.title}>Github:</span>
          <a href='https://github.com/ysk-omi' target='_blank' rel='noopener noreferrer'>
            ysk-omi
          </a>
        </li>
      </ul>
    </footer>
  );
}
