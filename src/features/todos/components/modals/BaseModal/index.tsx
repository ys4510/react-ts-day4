import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { UpdateTodoModal } from "../UpdateTodoModal";
import ConfirmModal from '../ConfirmModal'
import styles from "./index.module.css";

const BaseModal: FC = () => {
  const isOpen = useAppSelector((state) => state.todos.isModalOpen);
  const buttonType = useAppSelector((state) => state.todos.buttonType);


  if (!isOpen) return null;

  const TSX = buttonType==="update" ? <UpdateTodoModal />: <ConfirmModal /> ;
  return (
    <div className={styles.modal}  >
      <div>BaseModal index.tsx の中</div>
      <div className={styles.modalContainer}>{TSX}</div>
    </div>
  );
};

export default BaseModal;
