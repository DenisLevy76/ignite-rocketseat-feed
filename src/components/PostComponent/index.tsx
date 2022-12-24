import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FormEvent, useState } from 'react';
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
  const [comments, setComments] = useState<string[]>(['Muito legal']);
  const [commentText, setCommentText] = useState<string>('');

  const handleCreateComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setComments((prevValue) => [...prevValue, commentText]);
    setCommentText('');
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeleteOne);
  };

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
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="/404">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateComment} className={styles.comment_form}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          name="comment"
          onChange={(event) => setCommentText(event.target.value)}
          value={commentText}
          required
        />
        <footer>
          <button type="submit" disabled={!commentText}>
            Publicar
          </button>
        </footer>
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment}>
            <CommentComponent
              content={comment}
              onDeleteComment={deleteComment}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};
