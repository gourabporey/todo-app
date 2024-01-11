import { useEffect, useState } from 'react';
import Todo, { todo } from '../components/Todo';
import AddTodoInput from './AddTodoInput';
import { fetchAllTodos, updateTodos } from '@/utils/storage';
import createTodo from '@/actions/create-todo';

const TodoList = () => {
  const { data } = fetchAllTodos();
  const [todos, setTodos] = useState<todo[]>(data);
  const [isClient, setIsClient] = useState<Boolean>(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    updateTodos(todos);
  }, [todos]);

  const addTodo = async (title: string) => {
    const todo: todo = await createTodo(title);
    setTodos([...todos, todo]);
  };

  const toggleTodoStatus = (id: string) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].marked = !todos[todoIndex].marked;
    }
    updateTodos(todos);
  };

  return (
    <div className='h-screen'>
      <AddTodoInput onAddTodo={addTodo} />
      {isClient && (
        <div>
          {todos.map(({ title, marked, id }) => {
            return (
              <Todo
                todo={{ title, marked, id }}
                key={id}
                toggleTodoStatusOfId={toggleTodoStatus}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
