import React from 'react'
import { ITodo } from '../Main/Main'
import ToDoItem from '../ToDoItem/ToDoItem'
import StyledUL from './ToDos.styled'

interface ITodosProps {
    todos: ITodo[]
    removeTodo(text:string) : void
}

const ToDos = ({todos,removeTodo}:ITodosProps) => {

  return (
    <StyledUL>
        {
            todos.map((e: ITodo,i:number)=> <ToDoItem key={i} {...e} removeTodo = {removeTodo}/>)
        }
    </StyledUL>
  )
}

export default ToDos