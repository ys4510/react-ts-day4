import React, { FC, useEffect } from "react";
import TodoForm from "./TodoForm";
import ViewStatusSelector from "./ViewStatusSelector";
import TodoList from "./TodoList";
import { useAppSelector } from "../../../app/hooks";
import { fetchTodoAsync } from "../todoSlice";
import { useAppDispatch } from "../../../app/hooks";

const TodoContainer: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const todos = dispatch(fetchTodoAsync());
  }, []);
  const isFetching = useAppSelector(state=> state.todos.isFetching);

  if (isFetching) return <div id='loading'>Loading...</div>;

  return (
    <>
      <h3>To-Do App</h3>
      <TodoForm />
      <ViewStatusSelector />
      <TodoList />
      <h5>Vite x React Redux Toolkit x Typescript x Jest</h5>
    </>
  );
};

export default TodoContainer;
