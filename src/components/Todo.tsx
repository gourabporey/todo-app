import { useState } from 'react';
import Checkbox from './Checkbox';

export type todo = {
  id: string;
  title: string;
  marked: boolean;
};

const Todo = (todo: todo) => {
  const [marked, setMarked] = useState(todo.marked);

  const toggleTodoStatus = () => setMarked(!marked);

  return (
    <div>
      <Checkbox
        id={todo.id}
        label={todo.title}
        checked={marked}
        onClick={toggleTodoStatus}
      />
    </div>
  );
};

export default Todo;
