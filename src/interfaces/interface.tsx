export interface TodoInterface {
  title: string;
  body: string;
}

// redux thunk
export interface UpdateTodoInterface {
  id:string,
  data:TodoInterface
}
