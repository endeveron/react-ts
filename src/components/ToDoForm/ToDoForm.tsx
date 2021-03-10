import React from 'react';

const ToDoForm: React.FunctionComponent = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Enter Task Title"/>
      <label htmlFor="title" className="active">Title</label>
    </div>
  );
};

export default ToDoForm;