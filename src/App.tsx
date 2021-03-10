import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ToDoForm from './components/ToDoForm/ToDoForm';

const App: React.FunctionComponent = () => {
  const [todoArr, setToDoArr] = useState([])

  const addHandler = (title: string) => {
    console.log('Add new todo')
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <ToDoForm onAdd={addHandler}/>
      </div>
    </>
  );
}

export default App;
