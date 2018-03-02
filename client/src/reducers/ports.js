export default (state = [], action) => {
  switch(action.type) {
    case 'GET_PORTS_SUCCESS':
      return action.ports;

    case 'ADD_FAVORITE_PORT':
      return state.concat(action.port)

    default:
      return state;
  }
}

// export default (state = [], action) => {
//   switch(action.type) {
    
//     case 'ADD_FAVORITE_PORT':
//       return state.concat(action.port)

//     default:
//       return state;

//   }
// }