import { type FC } from "react";
import selectTodos from "../utils/selectTodos";
import TodoItem from "./TodoItem";
import BaseModal from "./modals/BaseModal";


const TodoList: FC = () => {
  const todos = selectTodos();
 

  return (
    <>
      <BaseModal />
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
