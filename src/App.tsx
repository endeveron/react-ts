import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ToDoForm from './components/ToDoForm/ToDoForm';

const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <ToDoForm />
      </div>
    </>
  );
}

export default App;
