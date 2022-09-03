import React, { FC, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { create } from "../todoSlice";
import { Todo } from "../types";
import getCurrentDateTime from "../utils/getCurrentDateTime";
import getNewId from "../utils/getNewId";

const TodoForm: FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeText :React.ChangeEventHandler<HTMLInputElement>= (e)=> {
    switch(e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case 'body':
        setBody(e.target.value)
    }
  }

  const onCreateHandler =()=>{
    if (!title || !body) {
      alert('Please enter Title and Description');
      return;
    }

    const todo :Todo= {
      id: getNewId(),
      title: title,
      body: body,
      status: 'waiting',
      createdAt:getCurrentDateTime()
    }
    dispatch(create(todo));
    setTitle('');
    setBody('');
  }
  return (
    <>
      <div id="form-wrapper">
        <div id="label-wrapper">
          <label>
            <span>Task Name : </span>
            <input type="text" name="title" value={title} onChange={onChangeText} />
          </label>
          <label>
            <span>Description : </span>
            <input type="text" name='body' value={body} onChange={onChangeText} />
          </label>
        </div>
        <button onClick={onCreateHandler}>Create</button>
      </div>
    </>
  );
};

export default TodoForm;
