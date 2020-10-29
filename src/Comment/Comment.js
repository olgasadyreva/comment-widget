import React from 'react';
import '../css/comment.css';

const comment = (props) => {
  const {id, name, text, datetime, onBtnDeleteCommentClick} = props;

  return(
    <li className="comments-item" key={id} >
      <p className="name">{name}</p>
      <p className="text">{text}</p>
      <p className="datetime">{datetime}</p>

    <button className="btn-delete"
            type="button"
            onClick={onBtnDeleteCommentClick}>
              Удалить
    </button>

    </li>
)

}

export default comment;