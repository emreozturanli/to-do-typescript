
import StyledLI from './ToDoItem.styled'

interface ITodoProps {
    text: string
    isDone: boolean
    removeTodo(text:string) : void
}

const ToDoItem = ({text,isDone,removeTodo}: ITodoProps) => {

  return (
    <StyledLI>
        <p>{text}</p>
        <button onClick={()=>removeTodo(text)}>&#x2421;</button>
    </StyledLI>
  )
}

export default ToDoItem