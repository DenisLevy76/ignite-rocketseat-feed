import styles from './styles.module.css';

export const PostComponent: React.FC = () => {
  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.user_info}>
          <img
            src="https://avatars.githubusercontent.com/u/62116847?v=4"
            className={styles.avatar}
          />
          <div className={styles.user_data}>
            <strong>Denis Levy</strong>
            <p>Web Developer</p>
          </div>
        </div>

        <time
          title="30 de Novembro de 2022, às 8 horas"
          dateTime="2022-11-30 08:13:30"
        >
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="/404" className={styles.link}>
            👉 jane.design/doctorcare
          </a>
        </p>

        <p>
          <a href="/404" className={styles.link}>
            #novoprojeto{' '}
          </a>
          <a href="/404" className={styles.link}>
            #nlw{' '}
          </a>
          <a href="/404" className={styles.link}>
            #rocketseat
          </a>
        </p>
      </div>
      <form className={styles.comment_form}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};
