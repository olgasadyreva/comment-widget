import React from 'react';
import {connect} from 'react-redux';
import { addComment, removeComment } from '../actions/index.js'

import Comment from '../Comment/Comment.js';
import Form from '../Form/Form.js';
import store from '../index.js';

class App extends React.Component {

  handleFormSubmit (e){
    e.preventDefault();
    const input = document.querySelector('.add-author');
    const textarea = document.querySelector('.add-text');

    if(!input.value || !textarea.value) {
      return false;
    }

    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    const datetime = new Date().toLocaleString('ru');

    const newComment = {
        id: id,
        name: input.value,
        text: textarea.value,
        datetime: datetime
    }

    store.dispatch(addComment(newComment));
    e.target.reset();
    return newComment;
   }

  onBtnDeleteCommentClick(id) {
    this.props.removeComment(id);
  }

  render() {
    const local = localStorage.getItem('comments');

    if(local && JSON.parse(local.length !== 0)) {

      let comments = JSON.parse(localStorage.getItem('comments'));
      return (
        <div className="wrap">
          {
            <ul className="comments-list">
              {
                comments.map((comment) => {

                  return (

                    <Comment
                      key = {comment.id}
                      id = {comment.id}
                      name = {comment.name}
                      text = {comment.text}
                      datetime = {comment.datetime}
                      onBtnDeleteCommentClick = { () => this.props.removeComment(comment)}
                    />
                  )
                })
              }
          </ul>
          }

          <Form handleFormSubmit = {this.handleFormSubmit}/>
        </div>
      )
    }

    else {
      return (
        <div>
          <p className="message">Сообщений нет</p>

          <Form handleFormSubmit = {this.handleFormSubmit}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (newComment) => dispatch(addComment(newComment)),
    removeComment: (comment) => dispatch(removeComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);