import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeComment, setLikeComment] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function hendleLikeComment() {
    // para obter o valor mais recente do estado use-se o padrão de função
    setLikeComment((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Erivaldo-Montes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          {/* informações do autor */}
          <header>
            <div className={styles.authorAndTime}>
              <strong>Filipe Gomes</strong>

              <time
                title="10 de outubro de 2022 ás 19:13"
                dateTime="2022-10-11 19:13:00"
              >
                cerca de 2 min atrás
              </time>
            </div>

            {/* deletar comentário */}
            <button onClick={handleDeleteComment} title="delatar comentário">
              <Trash size={24} />
            </button>
          </header>

          {/* conteúdo do comentário */}
          <p>{content}</p>
        </div>

        {/* likes */}
        <footer>
          <button onClick={hendleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
