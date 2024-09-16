import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4'>
      <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>Yapılacaklar Listesi</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map(todo => (
            <li key={todo.id} className='flex justify-between items-center p-3 mb-2 bg-gray-100 rounded-lg shadow'>
              <span className='text-gray-700'>{todo.title}</span>
            </li>
          ))
        ) : (
          <li className='p-3 text-center text-gray-500'>Yapılacak bir şey yok.</li>
        )}
      </ul>
    </div>
  );
}
