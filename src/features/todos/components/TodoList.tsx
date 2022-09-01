import React, { FC } from "react";
import { selectTodos } from "../todoSlice";
import { useAppSelector } from "../../../app/hooks";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector(selectTodos);
  // console.log('todos: ',todos);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Desc.</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Deleted</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length ? (
            todos.map((todo, index) => <TodoItem key={index} todo={todo} />)
          ) : (
            <tr>
              <td colSpan={9}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
