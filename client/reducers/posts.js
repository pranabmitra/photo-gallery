function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const index = action.index;
            console.log('log: ', state[index]);
            return [
                ...state.slice(0, index), // before all items that we are updating
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1), // after all items that we are updating
            ]
        default:
            return state;
    }
}

export default posts;