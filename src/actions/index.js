export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    payload: comment
  }
}

export const removeComment = (id) => {
  return {
    type: 'REMOVE_COMMENT',
    payload: id
  }
}