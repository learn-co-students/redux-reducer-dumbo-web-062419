export function managePresents(state, action){
  switch(action.type){
    case "INCREASE" :
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
  //
  // if (action.type === "INCREASE") {
  //   return {numberOfPresents: state.numberOfPresents + 1}
  // } else {
  //   return state
  // }
}
