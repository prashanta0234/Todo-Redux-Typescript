export interface TodoInterface {
  title: string;
  body: string;
}

export interface todointer {
  title: string;
  body: string;
  id: number;
}
// redux thunk
export interface UpdateTodoInterface {
  id: number;
  data: TodoInterface;
}

// redux state
export interface stateInterface {
  todo: todointer[];
  isLoding?: boolean;
  isError?: boolean;
  error?: string | undefined;
}
