import React from 'react';
import '../css/form.css';

const form = (props) => {
  const {handleFormSubmit} = props;

  return (
    <form className='add-comment' onSubmit={props.handleFormSubmit}>
       <input
         type='text'
         name="name"
         className='add-author'
         placeholder='Ваше имя'
       />

       <textarea
         className='add-text'
         name="text"
         placeholder='Добавьте свой комментарий'
       ></textarea>

       <button
         className='add-btn'
        >
          Добавить
       </button>

    </form>
  )
}

export default form;

















