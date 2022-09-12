import React, { FC, useState } from "react";
import { TodoUpdate, TODO_STATUSES, TodoStatus } from "../../../types";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { toggleIsModalOpen, update } from "../../../todoSlice";
import translateStatus from "../../../utils/translateStatus";

export const UpdateTodoModal: FC = () => {
  const dispatch = useAppDispatch();
  const TodoId = useAppSelector((state) => state.todos.selectedTodoId);
  const index = useAppSelector((state) =>
    state.todos.todos.findIndex((todo) => todo.id === TodoId)
  );
  const todo = useAppSelector((state) => state.todos.todos[index]);
  const [newInput, setNewInput] = useState<TodoUpdate>(todo);

  const onChangeTextHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setNewInput({ ...newInput, [e.target.name]: e.target.value });
  };

  const onChangeSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const newStatus = e.target.value as TodoStatus;
    setNewInput({ ...newInput, status: translateStatus(newStatus) });
  };

  const onUpdateOkHandler = () => {
    dispatch(update({ ...newInput }));
    dispatch(toggleIsModalOpen());
  };

  return (
    <div className={styles.modalContainer}>
      <p>Updating Todo</p>
      <div className={styles.formWrapper}>
        <div>
          <label>
            <span>Title : </span>
            <input
              type="text"
              name="title"
              value={newInput.title}
              onChange={onChangeTextHandler}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Desc.: </span>
            <input
              type="text"
              name="body"
              value={newInput.body}
              onChange={onChangeTextHandler}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Status : </span>
            <select
              name="status"
              value={newInput.status}
              onChange={onChangeSelectHandler}
            >
              {Object.entries(TODO_STATUSES).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button onClick={() => dispatch(toggleIsModalOpen())}>CANCEL</button>
        <button onClick={onUpdateOkHandler}>UPDATE</button>
      </div>
    </div>
  );
};
