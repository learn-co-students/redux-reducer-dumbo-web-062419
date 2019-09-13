export function managePresents(state, action){
    switch (action.type) {
        case "INCREASE_PRESENTS":
            return {presents: state.presents + 1} 
    }
}
