import React, { FC, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { create } from "../todoSlice";
import { TodoInput } from "../types";

const TodoForm: FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "body":
        setBody(e.target.value);
    }
  };

  const onCreateHandler = () => {
    if (!title || !body) {
      alert("Please enter Task and Notes");
      return;
    }

    const todo: TodoInput = {
      title: title,
      body: body,
    };
    dispatch(create(todo));
    setTitle("");
    setBody("");
  };
  return (
    <>
      <div id="form-wrapper">
        <div id="label-wrapper">
          <label>
            <span>Task : </span>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChangeText}
            />
          </label>
          <label>
            <span>Notes : </span>
            <input
              type="text"
              name="body"
              value={body}
              onChange={onChangeText}
            />
          </label>
        </div>
        <button onClick={onCreateHandler}>Create</button>
      </div>
    </>
  );
};

export default TodoForm;
