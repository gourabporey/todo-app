import { useState } from 'react';
import Checkbox from './Checkbox';

export type todo = {
  id: string;
  title: string;
  marked: boolean;
};

export interface TodoProps {
  todo: todo;
  toggleTodoStatusOfId: Function;
}

const Todo = (props: TodoProps) => {
  const { todo, toggleTodoStatusOfId } = props;
  const { id, title, marked: todoMarked } = todo;
  const [marked, setMarked] = useState(todoMarked);

  const toggleTodoStatus = () => {
    setMarked(!marked);
    toggleTodoStatusOfId(id);
  };

  return (
    <div>
      <Checkbox
        id={id}
        label={title}
        checked={marked}
        onClick={toggleTodoStatus}
      />
    </div>
  );
};

export default Todo;
