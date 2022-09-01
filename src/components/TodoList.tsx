import React from "react";

const TodoList = () => {
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
          <tr>
            <td colSpan={9}>No Data</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
