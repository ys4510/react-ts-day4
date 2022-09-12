import todosReducer, {
  create,
  update,
  remove,
  restore,
  TodoState,
  changeViewStatus,
  setButtonType,
  toggleIsModalOpen,
  setSelectedTodoId,
  fetchTodoAsync,
} from "../todoSlice";
import {
  Todo,
  TodoID,
  TodoInput,
  TodoUpdate,
  ViewStatus,
  ButtonType,
} from "../types";
import { selectTodos } from "../utils";

describe("todos reducer", () => {
  const initialState: TodoState = {
    todos: [],
    viewStatus: "all",
    isFetching: false,
    isModalOpen: false,
    error: null,
    buttonType: null,
    selectedTodoId: null,
  };

  it("should handle create reducer", () => {
    const payload: TodoInput = {
      title: "AAA",
      body: "BBB",
    };

    const newState = todosReducer(initialState, create(payload));
    const todos = newState.todos;

    expect(todos.length).toEqual(1);
    expect(typeof todos[0].id).toEqual("string");
    expect(todos[0].title).toEqual(payload.title);
    expect(todos[0].body).toEqual(payload.body);
    expect(todos[0].status).toEqual("waiting");
    expect(todos[0].createdAt).not.toBeUndefined();
    expect(todos[0].updatedAt).toBeUndefined();
    expect(todos[0].deletedAt).toBeUndefined();
    expect(newState).toEqual({
      todos,
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    });
  });

  it("should handle update reducer", () => {
    const todoId = "todoid-1";
    const initialState: TodoState = {
      todos: [
        {
          id: todoId,
          title: "First Title",
          body: "First Body",
          status: "waiting",
          createdAt: "2022-01-01 12:00:00",
          updatedAt: undefined,
          deletedAt: undefined,
        },
      ],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: TodoUpdate = {
      id: todoId,
      title: "AAA",
      body: "BBB",
      status: "pending",
    };

    const newState = todosReducer(initialState, update(payload));
    const todos = newState.todos;
    console.log("update : ", todos);
    expect(todos.length).toEqual(1);
    expect(todos[0].updatedAt).not.toEqual(undefined);
    expect(todos[0].title).toEqual(payload.title);
    expect(todos[0].body).toEqual(payload.body);
    expect(todos[0].status).toEqual(payload.status);
    expect(todos[0].createdAt).toEqual(initialState.todos[0].createdAt);
    expect(todos[0].updatedAt).not.toEqual(undefined);
    expect(todos[0].deletedAt).toEqual(undefined);
  });

  it("should handle remove reducer", () => {
    const initialState: TodoState = {
      todos: [
        {
          id: "todoid1",
          title: "title1",
          body: "body1",
          status: "working",
          createdAt: "2022-01-01 12:00:00",
          updatedAt: undefined,
          deletedAt: undefined,
        },
      ],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: TodoID = "todoid1";
    const newState = todosReducer(initialState, remove(payload));
    const todos = newState.todos;

    expect(todos.length).toEqual(1);
    expect(todos[0].deletedAt).not.toEqual(undefined);
  });

  it("should handle restore reducer", () => {
    const initialState: TodoState = {
      todos: [
        {
          id: "todoid1",
          title: "title1",
          body: "body1",
          status: "working",
          createdAt: "2022-01-01 12:00:00",
          updatedAt: undefined,
          deletedAt: "2022-01-02 12:00:00",
        },
      ],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: TodoID = "todoid1";
    const newState = todosReducer(initialState, restore(payload));
    const todos = newState.todos;

    expect(todos.length).toEqual(1);
    expect(todos[0].deletedAt).toEqual(undefined);
  });

  it("should handle changeViewStatus reducer", () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: ViewStatus = "updated";
    const newState = todosReducer(initialState, changeViewStatus(payload));
    const todos = newState;

    expect(todos.viewStatus).toEqual(payload);
  });

  it("should handle setButtonType reducer", () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: ButtonType = "updated";
    const newState = todosReducer(initialState, setButtonType(payload));
    const todos = newState;

    expect(todos.buttonType).toEqual(payload);
  });

  it("should handle toggleIsModalOpen reducer", () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const newState = todosReducer(initialState, toggleIsModalOpen());
    const todos = newState;

    expect(todos.isModalOpen).toBe(true);
  });

  it("should handle setSelectedTodoId reducer", () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const payload: TodoID = "tododid-1";
    const newState = todosReducer(initialState, setSelectedTodoId(payload));
    const todos = newState;

    expect(todos.selectedTodoId).toBe(payload);
  });
});

describe("todos extraReducer", () => {
  it('makes isFetching "true" when pending', async () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
    const action = {
      type: fetchTodoAsync.pending.type,
    };

    const newState = todosReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  it('makes isFetching "false" and add todos when fulfilled', async () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: true,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };

    const action = {
      type: fetchTodoAsync.fulfilled.type,
      payload: [
        {
          id: "todoid-1",
          title: "title-1",
          body: "body-1",
        },
      ] as Todo[],
    };

    const newState = todosReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      isFetching: false,
      todos: [...action.payload],
    });
  });

  it('makes ifFetching "false" and assign error when rejected', async () => {
    const initialState: TodoState = {
      todos: [],
      viewStatus: "all",
      isFetching: true,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };

    const action = {
      type: fetchTodoAsync.rejected.type,
      error: "error",
    };

    const newState = todosReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      isFetching: false,
      error: action.error,
    });
  });
});
