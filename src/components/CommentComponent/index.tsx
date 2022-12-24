import styles from './styles.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { AvatarComponent } from '../AvatarComponent';
import { useState } from 'react';

export interface CommentComponentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const CommentComponent: React.FC<CommentComponentProps> = ({
  content,
  onDeleteComment,
}) => {
  const [likeCount, setLikeCount] = useState(0);
  return (
    <div className={styles.comment}>
      <AvatarComponent src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={() => onDeleteComment(content)}
            >
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount((prev) => prev + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
