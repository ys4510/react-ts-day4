import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import styles from "./index.module.css";
import { remove, restore, toggleIsModalOpen } from "../../../todoSlice";
import { TodoID } from "../../../types";

const ConfirmModal: FC = () => {
  const buttonType = useAppSelector((state) => state.todos.buttonType);
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.todos.selectedTodoId) as TodoID;

  const msg =
    buttonType === "delete"
      ? "Delete this to-do?"
      : buttonType === "restore"
      ? "Restore this to-do？"
      : "Do Nothing";

  const onClickHandler = () => {
    switch (buttonType) {
      case "delete":
        dispatch(remove(id));
        dispatch(toggleIsModalOpen());
        break;
        case "restore":
          dispatch(restore(id));
          dispatch(toggleIsModalOpen());
    }
  };
  return (
    <div>
      <p>{msg}</p>
      <div className={styles.btnWrapper}>
        <button
          className={styles.cancelButton}
          onClick={() => dispatch(toggleIsModalOpen())}
        >
          Cancel
        </button>
        <button className={styles.okButton} onClick={onClickHandler}>
          {" "}
          OK
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
