export default (state = [], action) => {
  switch(action.type) {
    
    case 'ADD_FAVORITE_PORT':
      return state.concat(action.favoritePort)

    default:
      return state;

  }
}