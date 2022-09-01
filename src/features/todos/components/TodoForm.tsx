import React from "react";

const TodoForm = () => {
  return (
    <>
      <div id="form-wrapper">
        <div id="label-wrapper">
          <label>
            <span>Task Name : </span>
            <input type="text" />
          </label>
          <label>
            <span>Description : </span>
            <input type="text" />
          </label>
        </div>
        <button>Create</button>
      </div>
    </>
  );
};

export default TodoForm;
