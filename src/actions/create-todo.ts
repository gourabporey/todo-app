import axios from 'axios';

const createTodo = async (title: string) => {
  const { data: todo } = await axios.post('/api/todos/create-todo', {
    title,
    marked: false,
  });

  return todo;
};

export default createTodo;
