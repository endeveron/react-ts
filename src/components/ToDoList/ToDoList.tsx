import React from 'react';
import IToDo from '../../interfaces/todo';

import './ToDoList.scss'

type ToDoListProps = {
  todos: IToDo[],
  onToggle(id: number): void,
  onRemove: (id: number) => void
}

const ToDoList: React.FC<ToDoListProps> = ({ 
  todos, 
  onRemove, 
  onToggle }) => {

    if (todos.length === 0) {
      return (<p>No todos</p>)
    }

    const removeHandler = (e:React.MouseEvent, id:number) => {
      e.preventDefault()
      onRemove(id)
    }

    return (
      <ul>
        { todos.map(todo => {
          const classList = ['todo']
          if (todo.completed) {
            classList.push('completed')
          }

          return (
            <li className={classList.join(' ')} key={todo.id}>
              <label>
                <input 
                  onChange={onToggle.bind(null, todo.id)}
                  type="checkbox" 
                  checked={todo.completed} />
                <span>{todo.title}</span>
                <i 
                  onClick={(e) => removeHandler(e, todo.id)}
                  className="material-icons red-text">delete</i>
              </label>
            </li>
          )
        })}
      </ul>
    )
}

export default ToDoList;