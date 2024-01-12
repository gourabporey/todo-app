import axios from 'axios';

const toggleTodoStatusOfId = async (todoId: string, status: Boolean) => {
  const result = await axios.put(`/api/todos/${todoId}/toggle-todo-status`, {
    marked: status,
  });
  return result;
};

export default toggleTodoStatusOfId;
