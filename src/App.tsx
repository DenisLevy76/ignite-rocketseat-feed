import HeaderComponent from './components/HeaderComponent';
import { PostComponent } from './components/PostComponent';
import { SidebarComponent } from './components/SidebarComponent';
import styles from './styles/app.module.css';
import './styles/reset.css';

export const App = () => {
  return (
    <div className="App">
      <HeaderComponent />

      <div className={styles.wrapper}>
        <SidebarComponent />
        <main>
          <ul className={styles.posts__list}>
            <li>
              <PostComponent />
            </li>
            <li>
              <PostComponent />
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};
