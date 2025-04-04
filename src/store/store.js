const initState = {
    text: "",
    todos: []
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        
        case "text":
            return {
                ...state,
                text: action.payload
            }

        case "add": 
            if(state.text.trim()) {
                return {
                    ...state,
                    text: "",
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

        case "check": 
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload
                    ? {...todo, completed : !todo.completed}
                    : todo
                })
            }
        default : 
            return state
    }
}

export {reducer, initState}