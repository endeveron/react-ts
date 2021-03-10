import React, { useState, useEffect } from 'react'

import NavBar from './components/NavBar/NavBar'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'
import IToDo from './interfaces/todo'

declare var confirm: (question: string) => boolean

const App: React.FunctionComponent = () => {
  const [todoArr, setToDoArr] = useState<IToDo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IToDo[]
    setToDoArr(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoArr))
  }, [todoArr])

  const addHandler = (title: string) => {
    const newToDo: IToDo = {
      id: Date.now(),
      title, 
      completed: false
    }
    setToDoArr(prev => [newToDo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setToDoArr(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure ?')
    if (shouldRemove) setToDoArr(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <ToDoForm onAdd={addHandler}/>
        <ToDoList 
          todos={todoArr}
          onToggle={toggleHandler}
          onRemove={removeHandler} />
      </div>
    </>
  );
}

export default App;
