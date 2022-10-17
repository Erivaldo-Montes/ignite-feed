import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState(["OOOOOOOOOOOOH cara!!!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishDateFormat = format(publishAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  // quantidade de tempo em que o post foi publicado
  const publishDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentText() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    // Pela conceito da imutabilidade é preciso criar um nova sem o comentário deletado.
    const commentWithouDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentWithouDeleteOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const isNewCommentIsEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        {/* autor */}
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarURL} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>

            <span>{author.role}</span>
          </div>
        </div>
        {/* tempo de publicação */}
        <time title={publishDateFormat} dateTime={publishAt.toISOString()}>
          {publishDateRelativeToNow}
        </time>
      </header>

      {/* conteúdo */}
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      {/* formulário para adicionar comentário */}
      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          onChange={handleNewCommentText}
          name="comment"
          placeholder="deixe seu comentário"
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentIsEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {/* comentários */}
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
