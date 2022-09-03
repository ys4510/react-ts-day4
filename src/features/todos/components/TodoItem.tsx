import React, { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { toggleIsModalOpen ,setButtonType, setSelectedTodoId} from "../todoSlice";
import { TodoInput } from "../types";

type Props = {
  todo: TodoInput;
};

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const onUpdateHandler = () => {
    dispatch(setButtonType('update'));
    dispatch(setSelectedTodoId(todo.id));
  }

  const onDeleteHandler = ()=> {
    dispatch(setButtonType('delete'));
    dispatch(setSelectedTodoId(todo.id));
  }

  const onRestoreHandler =()=> {
    dispatch(setButtonType('restore'));
    dispatch(setSelectedTodoId(todo.id));
  }


  return (
    <>
      <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.body}</td>
        <td>{todo.status}</td>
        <td>{todo.createdAt}</td>
        <td>{todo.updatedAt}</td>
        <td>{todo.deletedAt}</td>
        <td>
          <button
          name="update"
            disabled={todo.deletedAt !=="" ? true : false}
            onClick={onUpdateHandler}
          >
            UPDATE
          </button>
        </td>
        <td>
          {todo.deletedAt === "" ?
          <button name="delete" onClick={onDeleteHandler}>DELETE</button>
          :
          <button name="restore" onClick={onRestoreHandler}>RESTORE</button>
        }
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
