type todo = {
  id: string;
  title: string;
  marked: boolean;
};

export const fetchAllTodos = () => {
  let todos: todo[] = [];

  if (typeof window !== 'undefined' && window.localStorage) {
    todos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  return { data: todos, loading: todos.length === 0 };
};

export const updateTodos = async (todos: Array<todo>) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
};
