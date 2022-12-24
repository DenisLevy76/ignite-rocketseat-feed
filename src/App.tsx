import HeaderComponent from './components/HeaderComponent';
import { IPost, PostComponent } from './components/PostComponent';
import { SidebarComponent } from './components/SidebarComponent';
import styles from './styles/app.module.css';
import './styles/reset.css';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/62116847?v=4',
      name: 'Denis Levy',
      role: 'Web developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('Sat Dec 24 2022 11:15:10 GMT-0300'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Web developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('Sat Dec 22 2022 11:15:10 GMT-0300'),
  },
];

export const App = () => {
  return (
    <div className="App">
      <HeaderComponent />

      <div className={styles.wrapper}>
        <SidebarComponent />
        <main>
          <ul className={styles.posts__list}>
            {posts.map((post) => (
              <li key={post.id}>
                <PostComponent post={post} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};
