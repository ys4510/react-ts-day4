import { useAppSelector } from "../../../app/hooks";

export const selectTodos = () => {
  const viewStatus = useAppSelector((state) => state.todos.viewStatus);
  const todos = useAppSelector((state) => state.todos.todos);
  if (viewStatus === "deleted") {
    return todos.filter((todo) => todo.deletedAt !== undefined);
  }

  if (viewStatus === "updated") {
    console.log(
      "updated",
      todos.filter(
        (todo) => todo.updatedAt !== undefined && todo.deletedAt === undefined
      )
    );
    return todos.filter(
      (todo) => todo.updatedAt && todo.deletedAt === undefined
    );
  }

  if (viewStatus === "all") {
    return todos.filter((todo) => todo.deletedAt === undefined);
  }
  return todos;
};

export default selectTodos;
