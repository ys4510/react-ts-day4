import { getTodos } from "../localStorage/todosLocalStorage";
import { Todo } from "../types";

type Response = {
  data: Todo[];
};

const fetchTodos = async (): Promise<Response> => {
  return new Promise((resolve) => {
    const todos: Todo[] = getTodos();
    setTimeout(() => resolve({ data: todos }), 100);
  });
};

export default fetchTodos;
