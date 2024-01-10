import TodoList from '@/components/TodoList';

const Home = () => {
  return (
    <main className='container p-5 sm:w-full md:4/12 xl:w-4/12 flex items-center flex-col m-auto'>
      <h2 className='text-center text-indigo-500 text-2xl'>TODO</h2>
      <div className='w-full'>
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
