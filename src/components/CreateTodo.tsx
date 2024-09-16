import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

export default function CreateTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const todoCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim().length < 1) {
      alert('Lütfen boş bir kelime girmeyiniz!');
      return;
    }
    const todoPayload: TodoType = {
      id: Date.now(),
      title: newTodo,
    };
    dispatch(createTodo(todoPayload));
    setNewTodo(''); // Formu temizle
  };

  return (
    <div className='flex justify-center items-center p-4'>
      <form onSubmit={todoCreate} className='flex flex-col bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Yeni Todo Ekle</h2>
        <input
          value={newTodo}
          onChange={handleChange}
          type="text"
          name='newTodo'
          className='w-full h-12 px-4 mb-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ease-in-out duration-300'
          placeholder='Todo başlığını girin...'
        />
        <button
          type='submit'
          className='w-full h-12 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ease-in-out duration-300'
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
