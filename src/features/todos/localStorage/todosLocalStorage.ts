import type { Todo } from "../types";

const PREFIX_KEY = 'rtk-ts';
const LOCAL_STORAGE_KEY = `${PREFIX_KEY}:todos`;

export const setTodos = (todos: Todo[])=> {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[]=> {
  const json = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(!json) return [];
  
  const todos = JSON.parse(json);
  return todos;
};