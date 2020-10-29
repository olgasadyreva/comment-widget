import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import comments from './reducers/index.js';
import App from './containers/App';

const initialState = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
const store = createStore(comments, initialState);

store.subscribe(() => {
  localStorage.setItem('comments', JSON.stringify(store.getState()));

  if(JSON.parse(localStorage.getItem('comments')).length == 0) {
    localStorage.clear();
  }

});

export default store;

ReactDom.render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);





