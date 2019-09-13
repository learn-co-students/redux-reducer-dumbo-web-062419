export function manageFriends(state, action){
  // action.friend ?
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      return {...state, friends: state.friends.filter(r => r.id != action.id)};
    default:
      return state;
  }
}
