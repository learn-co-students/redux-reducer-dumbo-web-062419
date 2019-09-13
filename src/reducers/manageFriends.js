export function manageFriends(state, action){
  let oldFriends = state.friends

  switch (action.type) {
    case "ADD_FRIEND" :
      return (...state, friends: [...state.friends, action.friend])
    case "REMOVE_FRIEND" :
      const friendToRemove = state.friends.find(friend => friend.id === action.id)
      debugger
      return ()
    default:
      state
  }
}
