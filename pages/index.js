import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parabéns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>
      <div className={styles.confetti}></div>

      <main className={styles.main}>
        <h1 className={styles.title}>Parabéns João Luiz!!!</h1>

        <img
          width="100%"
          height="250"
          src="https://media.giphy.com/media/feio2yIUMtdqWjRiaF/giphy.gif"
          alt="birthday"
        />
        <img
          src="https://media.giphy.com/media/T8ZP9P7efQ8cE/giphy.gif"
          alt="darwin"
        />
        <img
          width="100%"
          height="250"
          src="https://media.giphy.com/media/kwCUIixcilSNi/giphy.gif"
          alt="doggo"
        />
        <img
          width="100%"
          height="250"
          src="https://media.giphy.com/media/9s55ZMp3uKXHin6cPP/giphy.gif"
          alt="luna"
        />
      </main>

      <footer className={styles.footer}>
        <p>
          Made with 💜 by
          <a
            href="https://github.com/hermeshcg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hermes
          </a>
        </p>
      </footer>
    </div>
  );
}
