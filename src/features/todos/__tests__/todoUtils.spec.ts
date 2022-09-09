import {
  getCurrentDateTime,
  getNewId,
  selectTodos,
  translateStatus,
} from "../utils";
import { ViewStatus, TODO_STATUSES, TodoStatus } from "../types";
import todosReducer, { TodoState } from "../todoSlice";

describe("util translateStatus", () => {

  it("should return completed", () => {
    const selectedStatus: string = "Completed";
    const translated: TodoStatus = translateStatus(selectedStatus);
    expect(translated).toBe("completed");
  });

  it("should return waiting", () => {
    const selectedStatus: string = "Waiting";
    const translated: TodoStatus = translateStatus(selectedStatus);
    expect(translated).toBe("waiting");
  });

  it("should return working", () => {
    const selectedStatus: string = "Working";
    const translated: TodoStatus = translateStatus(selectedStatus);
    expect(translated).toBe("working");
  });

  it("should return pending", () => {
    const selectedStatus: string = "Pending";
    const translated: TodoStatus = translateStatus(selectedStatus);
    expect(translated).toBe("pending");
  });

  it("should return discontinued", () => {
    const selectedStatus: string = "Discontinued";
    const translated: TodoStatus = translateStatus(selectedStatus);
    expect(translated).toBe("discontinued");
  });
});

describe("utils functions", () => {
  it("should return current Date & Time", () => {
    const newDateTime = getCurrentDateTime();
    expect(newDateTime).toContain("2022-");
    expect(newDateTime.length).toBe(19);
  });

  it("should return uuid", () => {
    const newID = getNewId();
  });

});

xdescribe('util selectTodos', ()=> {
  it("should return Todos according to viewStatus", () => {
    const initialState: TodoState = {
      todos: [
        {
          id: 'todo-id-1',
          title: "First",
          body: "Body-1",
          status: "waiting",
          createdAt: "2022-01-01 12:00:00",
          updatedAt: undefined,
          deletedAt: undefined,
        },
        {
          id: 'todo-id-2',
          title: "Second",
          body: "Body-2",
          status: "pending",
          createdAt: "2022-01-02 12:00:00",
          updatedAt:  "2022-01-03 12:00:20",
          deletedAt: undefined,
        },
        {
          id: 'todo-id-3',
          title: "Third",
          body: "Body-3",
          status: "pending",
          createdAt: "2022-01-02 12:00:00",
          updatedAt: undefined,
          deletedAt:  "2022-01-03 12:00:20",
        },
        {
          id: 'todo-id-4',
          title: "Fourth",
          body: "Body-4",
          status: "pending",
          createdAt: "2022-01-02 12:00:00",
          updatedAt:  "2022-01-03 12:00:20",
          deletedAt:  "2022-01-03 18:55:55",
        },
      ],
      viewStatus: "all",
      isFetching: false,
      isModalOpen: false,
      error: null,
      buttonType: null,
      selectedTodoId: null,
    };
  
    const newTodos = selectTodos();
    console.log(newTodos);
  });

})