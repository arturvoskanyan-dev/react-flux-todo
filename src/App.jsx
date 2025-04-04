import {useReducer} from "react"
import { reducer, initState } from "./store/store";
import {Header, List} from "./components/index"
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <section className="p-5 w-todo bg-dark-brown rounded-md shadow-2xl">
      <Header text={state.text} dispatch={dispatch} />
      <List todos={state.todos} />
    </section>
  )
}

export default App
