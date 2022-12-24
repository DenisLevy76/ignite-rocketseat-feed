import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { AvatarComponent } from '../AvatarComponent';
import { CommentComponent } from '../CommentComponent';
import styles from './styles.module.css';

export interface IPost {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: [
    {
      type: string;
      content: string;
    },
    {
      type: string;
      content: string;
    },
    {
      type: string;
      content: string;
    }
  ];
  publishedAt: Date;
}

export interface PostComponentProps {
  post: IPost;
}

export const PostComponent: React.FC<PostComponentProps> = ({
  post: { author, content, id, publishedAt },
}) => {
  return (
    <article className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles.user_info}>
          <AvatarComponent src={author.avatarUrl} isOnline />
          <div className={styles.user_data}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time
          title={format(
            publishedAt,
            "dd 'de' MMMM 'de' yyyy, 'às' H:mm 'horas'",
            {
              locale: ptBR,
            }
          )}
          dateTime={publishedAt.toISOString()}
        >
          {formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })}
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

      <ul>
        <li>
          <CommentComponent />
        </li>
      </ul>
    </article>
  );
};
