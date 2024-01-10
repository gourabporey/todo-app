import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <main className='container p-5 w-4/12 flex items-center flex-col m-auto'>
      <h2 className='text-center text-indigo-500 text-2xl'>TODO</h2>
      <div className='w-full'>
        <TodoList />
      </div>
    </main>
  );
}
