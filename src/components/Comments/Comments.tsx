import { socials, comments } from "enums";
import { useEffect, useState } from "react";
import { ReactComponent as ShareIcon } from "assets/icons/share.svg";
import { ReactComponent as EnterIcon } from "assets/icons/enter.svg";
import { ReactComponent as HandUpIcon } from "assets/icons/hand-up.svg";
import { ReactComponent as HandDownIcon } from "assets/icons/hand-down.svg";
import { ReactComponent as DotsIcon } from "assets/icons/dots.svg";

import anonimous from "assets/images/avatar_anonimous.png";
import { daysLeft } from "utils/days-left";

type CommentType = {
  id: string;
  name: string;
  avatar: string | null;
  createdAt: Date;
  content: string;
  likes: number;
  dislikes: number;
  isVouted: boolean;
}[];

const INITIAL_COMMENTS = localStorage.getItem("comments")
  ? JSON.parse(localStorage.getItem("comments")!)
  : comments;

export const Comments = (): JSX.Element => {
  const [commentValue, setCommentValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [comments, setComments] = useState<CommentType>(INITIAL_COMMENTS);

  const handleChangeComment = (event: React.ChangeEvent): void => {
    const textarea = event.target as HTMLTextAreaElement;
    setCommentValue(textarea.value);
  };

  const handleChangeName = (event: React.ChangeEvent): void => {
    const input = event.target as HTMLInputElement;
    setNameValue(input.value);
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (commentValue.length > 0) {
      const comment = {
        id: (comments.length + 1).toString().padStart(2, "0"),
        name: nameValue.length > 0 ? nameValue : "Имя пользователя",
        avatar: null,
        createdAt: new Date(Date.now()),
        content: commentValue,
        likes: 0,
        dislikes: 0,
        isVouted: false,
      };
      setComments((prev) => [...prev, comment]);
    }
    setCommentValue("");
    setNameValue("");
  };

  const handleClickUp = (id: string): void => {
    const changedComment = comments.find((comment) => comment.id === id);

    if (changedComment) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? { ...comment, likes: comment.likes + 1, isVouted: true }
            : comment
        )
      );
    }
  };

  const handleClickDown = (id: string): void => {
    const changedComment = comments.find((comment) => comment.id === id);

    if (changedComment) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? { ...comment, dislikes: comment.dislikes + 1, isVouted: true }
            : comment
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <section className="comments__wrapper">
      <form className="comments__form" onSubmit={handleFormSubmit}>
        <label
          className="comments__textarea-label"
          htmlFor="comments__textarea-input"
        >
          <textarea
            className="comments__textarea-input"
            id="comments__textarea-input"
            name="comment"
            value={commentValue}
            placeholder="Добавить комментарий..."
            rows={5}
            maxLength={300}
            onChange={handleChangeComment}
            required
          />
        </label>
        <p className="comments__social-label">Войти через:</p>
        <ul className="comments__social-list list">
          {socials.map(({ name, link, Icon }) => (
            <li className="comments__social-item" key={link}>
              <a
                href={link}
                className="comments__social link"
                title={name}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="comments__icon" />
              </a>
            </li>
          ))}
        </ul>
        <label className="comments__input-label" htmlFor="comments__input">
          <span className="comments__input-span">Или как гость</span>
          <div className="comments__input-box">
            <input
              className="comments__input"
              id="comments__input"
              name="name"
              value={nameValue}
              placeholder="Имя *"
              onChange={handleChangeName}
            />
            <a href="./" className="comments__share link" title="Share...">
              <ShareIcon className="comments__share-icon" />
            </a>
          </div>
        </label>
        <button type="submit" className="comments__button">
          Отправить
        </button>
      </form>
      {comments.map(
        ({
          id,
          name,
          avatar,
          createdAt,
          content,
          likes,
          dislikes,
          isVouted,
        }) => (
          <div key={id}>
            <div className="comments__box">
              <img
                className="comments__avatar"
                src={avatar ? avatar : anonimous}
                alt={`${name} avatar`}
                width={40}
              />
              <div className="comments__content-box">
                <h4 className="comments__name">{name}</h4>
                <p className="comments__times-left">
                  {daysLeft(Date.now(), new Date(createdAt).valueOf())}
                </p>
                <p className="comments__content">{content}</p>
                <div className="comments__box-button">
                  <button
                    type="button"
                    className="comments__answer"
                    onClick={() => alert("Answer clicked!")}
                  >
                    <EnterIcon className="comments__answer-icon" />
                    Ответить
                  </button>
                  <button
                    type="button"
                    className="comments__hand-up"
                    onClick={() => handleClickUp(id)}
                    disabled={isVouted}
                  >
                    <HandUpIcon className="comments__hand-up-icon" />
                    {likes}
                  </button>
                  <button
                    type="button"
                    className="comments__hand-down"
                    onClick={() => handleClickDown(id)}
                    disabled={isVouted}
                  >
                    <HandDownIcon className="comments__hand-down-icon" />
                    {dislikes}
                  </button>
                  <button
                    type="button"
                    className="comments__dots"
                    onClick={() => alert("Submenu clicked!")}
                  >
                    <DotsIcon className="comments__dots-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
