const comments = (state = [], action) => {

  switch (action.type) {
    case 'ADD_COMMENT':

      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          text: action.payload.text,
          datetime: action.payload.datetime
        }
      ];

    case 'REMOVE_COMMENT':
      return state.filter(comment => comment.id !== action.payload.id);

    default:
        return state;
  }

}

export default  comments;

