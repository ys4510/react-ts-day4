export type TodoID = string;

export type DateTime = string;

export type Todo = {
  id: TodoID;
  title: string;
  body: string;
  status: TodoStatus;
  createdAt: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
};

export const TODO_STATUSES = {
  waiting: "Waiting",
  working: "Working",
  pending: "Pending",
  discontinued: "Discontinued",
  completed: "Completed",
};

export type TodoStatus = keyof typeof TODO_STATUSES;

export const VIEW_STATUSES = {
  all: "All (excludes Deleted)",
  updated: "Updated  (excludes Deleted)",
  deleted: "Deleted",
};

export type ViewStatus = keyof typeof VIEW_STATUSES;
