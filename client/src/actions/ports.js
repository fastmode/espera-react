// ** Async Actions **
export const getPorts = () => {
   return dispatch => {
     return fetch('http://localhost:3001/api/ports')
      .then(response => response.json())
      .then(ports => dispatch(setPorts(ports)))
      .catch(error => console.log(error));
  }
}

// ** Action Creators **
const setPorts = ports => {
  return {
    type: 'GET_PORTS_SUCCESS',
    ports
  }
}

// const addFavoritePort = port => {
//   return {
//     type: 'ADD_FAVORITE_PORT',
//     favoritePorts
//   }
// }
