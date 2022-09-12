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
