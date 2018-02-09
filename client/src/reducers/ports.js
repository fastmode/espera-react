export default (state = [], action) => {
  switch(action.type) {
    case 'GET_PORTS_SUCCESS':
      return action.ports;

    default:
      return state;
  }
}