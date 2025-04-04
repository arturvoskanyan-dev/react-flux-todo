const initState = {
    text: "",
    todos: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case "text":
            return {
                ...state,
                text : action.payload
            }
        case "add": 
            if(state.text.trim()) {
                return {
                    ...state,
                    text : "",
                    todos: [
                        ...state.todos,
                        {
                            id: Date.now(),
                            text : action.payload,
                            completed : false
                        }
                    ]
                }
            }
        default : 
            return state
    }
}

export {reducer, initState}