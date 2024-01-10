import { useState } from 'react';

export default function AddTodoInput(props: { onAddTodo: Function }) {
  const [todoContent, setTodoContent] = useState('');
  const [errorWhileAdding, setErrorWhileAdding] = useState(false);

  const handleChange = (text: string) => setTodoContent(text);
  const onAddTodo = (content: string) => {
    if (content === '') return setErrorWhileAdding(true);
    props.onAddTodo(content);
    setErrorWhileAdding(false);
    setTodoContent('');
  };

  return (
    <div className='w-full flex flex-col items-center py-2'>
      <div className='flex justify-center gap-2 w-full'>
        <input
          type='text'
          color='black'
          onChange={(e) => handleChange(e.target.value)}
          className={
            'px-2 rounded-lg border-2 grow' +
            (errorWhileAdding ? ' border-rose-600' : ' border-indigo-500')
          }
          placeholder='Enter your task'
          value={todoContent}
        />
        <input
          type='button'
          value='+'
          onClick={() => onAddTodo(todoContent)}
          className='px-3 bg-indigo-500 rounded-lg text-white'
        />
      </div>
    </div>
  );
}
