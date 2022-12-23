import styles from './styles.module.css';
import { PencilSimpleLine } from 'phosphor-react';

export const SidebarComponent: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50"
          alt="user banner"
          className={styles.aside__banner}
        />
      </figure>
      <div className={styles.aside__profile}>
        <img
          src="https://avatars.githubusercontent.com/u/62116847?v=4"
          alt="Denis Levy photo"
          className={styles.profile__avatar}
        />
        <strong>Denis Levy</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="/edit-profile" className={styles['aside__edit-button']}>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
