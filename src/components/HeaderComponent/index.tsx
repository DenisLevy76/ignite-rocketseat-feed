import styles from './styles.module.css';

const HeaderComponent: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/logo/igniteLogo.svg" alt="" className={styles.header__img} />
      <h1 className={styles.header__title}>Ignite feed</h1>
    </header>
  );
};

export default HeaderComponent;
