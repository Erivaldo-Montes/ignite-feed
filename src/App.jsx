import { Post } from "./components/Post";
import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Erivaldo",
      avatarURL: "https://github.com/Erivaldo-Montes.png",
      role: "full stack developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishAt: new Date("2022-10-15 16:23:54"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatarURL: "https://github.com/diego3g.png",
      role: "CTO @rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishAt: new Date("2022-10-10 10:10:10"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
