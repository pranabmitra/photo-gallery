function postComment(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment,
                }
            ]
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.index), // from the start to the deleted comment
                ...state.slice(action.index + 1), // after the deleted comment, till the end
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite the post with a new one
            [action.postId]: postComment(state[action.postId], action)
        }
    }
    
    return state;
}

export default comments;