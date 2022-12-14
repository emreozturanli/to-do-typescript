import { ChangeEvent, FC, useEffect, useState } from 'react'
import ToDos from '../ToDos/ToDos'
import StyledMain, { StyledInputContainer } from './Main.styled'

export interface ITodo {
  text: string
  isDone: boolean
}

const getTodos = (): ITodo | any => {
  const toDoList = localStorage.getItem('todolist')
  if (toDoList) {
    return JSON.parse(toDoList)
  }
  else {
    return []
  }
}

const Main: FC = () => {

  const [todo, setTodo] = useState({
    text: '',
    isDone: false
  })
  const [todos, setTodos] = useState<ITodo[]>(getTodos())

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  const addTodo = (): void => {
    if (todos.find(e => e.text.toLowerCase() === todo.text.toLowerCase())) {
      setTodo({
        ...todo,
        text: 'already exists'
      })
    }
    else if (todo.text !== '') {
      setTodos([...todos, todo])
      setTodo({
        text: '',
        isDone: false
      })
    }
    else {
      setTodo({
        ...todo,
        text: 'please type something'
      })
    }
  }
  const removeTodo = (text: string): void => {
    setTodos(todos.filter(e => e.text !== text))
  }

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos))
  }, [todos])

  return (
    <StyledMain>
      <StyledInputContainer>
        <input
          type="text"
          name='text'
          value={todo.text}
          onChange={handleChange} />
        <button onClick={addTodo}>Add</button>
      </StyledInputContainer>
      <ToDos todos={todos} removeTodo={removeTodo} />
    </StyledMain>
  )
}

export default Main