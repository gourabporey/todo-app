import { useState } from 'react';
import Todo, { todo } from '../components/Todo';
import AddTodoInput from './AddTodoInput';

type queryResponse = {
  data: { todos: Array<todo> };
  error?: string;
  loading: boolean;
};

function useQuery(pathIdentifier: string): queryResponse {
  return {
    data: { todos: [] },
    loading: false,
  };
}

const createTodo = (title: string): todo => {
  return {
    title: title,
    marked: false,
    id: Date.now().toString(),
  };
};

export default function TodoList() {
  const { data, error, loading } = useQuery('/todos');
  const [todos, setTodos] = useState(data.todos);

  const addTodo = async (title: string) => {
    const todo: todo = createTodo(title);
    setTodos([...todos, todo]);
  };

  return (
    <div className='h-screen'>
      <AddTodoInput onAddTodo={addTodo} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {todos.map(({ title, marked, id }) => {
            return <Todo title={title} marked={marked} id={id} key={id} />;
          })}
        </div>
      )}
    </div>
  );
}
