const initState = {
    text: "",
    todos: []
}

const reducer = (state, action) => {
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
                            isEdit : false,
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

        case "edit":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload.id  
                    ? {...todo, text : action.payload.newText, isEdit : !action.payload.isEdit}
                    : todo
                })
            }

        case "remove":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }

        case "clearAll":
            return {
                ...state,
                todos: action.payload
            }
        default : 
            return state
    }
}

export {reducer, initState}