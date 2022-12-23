import HeaderComponent from './components/HeaderComponent';
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
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              sapiente quia eos voluptatibus veniam, necessitatibus iure id ad
              adipisci! Iusto quia accusamus minima amet assumenda! Vitae aut
              dicta nobis ad.
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};
