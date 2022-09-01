import React, { FC } from "react";
import TodoForm from "./TodoForm";
import ViewStatusSelector from "./ViewStatusSelector";
import TodoList from "./TodoList";

const TodoContainer: FC = () => {
  return (
    <>
      <h3>To-Do App</h3>
      <TodoForm />
      <ViewStatusSelector />
      <TodoList />
      <h5>Vite x React Redux Toolkit x Typescript</h5>
    </>
  );
};

export default TodoContainer;
