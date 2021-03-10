import React, { useState } from 'react';

const ToDoForm: React.FunctionComponent = () => {
  const [title, setTitle] = useState<string>('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') console.log(title)
    setTitle('')
  }

  return (
    <div className="input-field mt2">
      <input 
        value={title}
        onChange={inputHandler}
        onKeyPress={keyPressHandler}
        type="text" 
        id="title" 
        placeholder="Enter Task Title"/>
      <label 
        htmlFor="title" 
        className="active">
          Title
      </label>
    </div>
  );
};

export default ToDoForm;