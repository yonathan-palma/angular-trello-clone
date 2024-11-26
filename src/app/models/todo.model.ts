export interface toDo{
  id: string;
  title: string;
}

export interface Column {
  title: string;
  todos: toDo[];
}