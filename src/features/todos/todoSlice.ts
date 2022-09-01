import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo, ViewStatus } from "./types";
import getNewId from "./utils/getNewId";
import getCurrentDateTime from "./utils/getCurrentDateTime";
import { RootState } from "../../app/store";
export type TodoState = {
  todos: Todo[];
  viewStatus: ViewStatus;
  isFetching: boolean;
  error: string | null;
};

const initialState: TodoState = {
  todos: [
    {
      id: getNewId(),
      title: "AAA",
      body: "ABABAB",
      status: "waiting",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: "",
    },
    {
      id: getNewId(),
      title: "BBB",
      body: "BBABBB",
      status: "pending",
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime(),
      deletedAt: "",
    },
    {
      id: getNewId(),
      title: "CCC",
      body: "CCCCCC",
      status: "completed",
      createdAt: getCurrentDateTime(),
      updatedAt: "",
      deletedAt: getCurrentDateTime(),
    },
  ],
  viewStatus: "all",
  isFetching: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state) => {},
    update: (state) => {},
    changeViewStatus: (state, actions:PayloadAction<ViewStatus>) => {
      state.viewStatus = actions.payload;
    },
  },
  extraReducers: {},
});

export const selectTodos = (state: RootState) => {
  // console.log('***: ', state.todos.todos);

  if (state.todos.viewStatus === "deleted") {
    return state.todos.todos.filter((todo) => todo.deletedAt !== "");
  }

  if (state.todos.viewStatus === "updated") {
    return state.todos.todos.filter((todo) => todo.updatedAt === "");
  }
  if (state.todos.viewStatus === "all") {
    return state.todos.todos.filter((todo) => todo.deletedAt === "");
  }
  console.log('selectTodos end')
  return state.todos.todos;
};

export const { create, update , changeViewStatus} = todoSlice.actions;
export default todoSlice.reducer;
