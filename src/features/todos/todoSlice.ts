import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Todo,
  ViewStatus,
  TodoInput,
  TodoUpdate,
  ButtonType,
  TodoID,
} from "./types";
import getCurrentDateTime from "./utils/getCurrentDateTime";
import fetchTodos from "./api/fetchTodos";
import { setTodos } from "./localStorage/todosLocalStorage";
import getNewId from "./utils/getNewId";

export type TodoState = {
  todos: Todo[];
  viewStatus: ViewStatus;
  isFetching: boolean;
  error: SerializedError | null;
  isModalOpen: boolean;
  buttonType: ButtonType | null;
  selectedTodoId: TodoID | null;
};

const initialState: TodoState = {
  todos: [],
  viewStatus: "all",
  isFetching: false,
  error: null,
  isModalOpen: false,
  buttonType: null,
  selectedTodoId: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, actions: PayloadAction<TodoInput>) => {
      state.todos.push({
        ...actions.payload,
        id: getNewId(),
        status: "waiting",
        createdAt: getCurrentDateTime(),
        deletedAt: undefined,
        updatedAt: undefined,
      });
      setTodos(state.todos);
    },
    update: (state, actions: PayloadAction<TodoUpdate>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === actions.payload.id
      );
      state.todos[index] = {
        createdAt: state.todos[index].createdAt,
        deletedAt: state.todos[index].deletedAt,
        ...actions.payload,
        updatedAt: getCurrentDateTime(),
      };
      setTodos(state.todos);
    },
    remove: (state, actions: PayloadAction<TodoID>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === actions.payload
      );
      state.todos[index] = {
        ...state.todos[index],
        deletedAt: getCurrentDateTime(),
      };
      setTodos(state.todos);
    },
    restore: (state, actions: PayloadAction<TodoID>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === actions.payload
      );
      state.todos[index] = { ...state.todos[index], deletedAt: undefined };
      setTodos(state.todos);
    },
    changeViewStatus: (state, actions: PayloadAction<ViewStatus>) => {
      state.viewStatus = actions.payload;
    },
    setButtonType: (state, actions: PayloadAction<ButtonType>) => {
      state.buttonType = actions.payload;
      state.isModalOpen = true;
    },
    toggleIsModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setSelectedTodoId: (state, actions: PayloadAction<TodoID>) => {
      state.selectedTodoId = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchTodoAsync.fulfilled, (state, actions) => {
        state.isFetching = false;
        state.error = null;
        state.todos = actions.payload;
      })
      .addCase(fetchTodoAsync.rejected, (state, actions) => {
        state.isFetching = false;
        state.error = actions.error;
      });
  },
});

export const fetchTodoAsync = createAsyncThunk<Todo[]>(
  `${todoSlice.name}/fetch`,
  async () => {
    const response = await fetchTodos();
    return response.data;
  }
);
export const {
  create,
  update,
  remove,
  restore,
  changeViewStatus,
  toggleIsModalOpen,
  setButtonType,
  setSelectedTodoId,
} = todoSlice.actions;
export default todoSlice.reducer;
