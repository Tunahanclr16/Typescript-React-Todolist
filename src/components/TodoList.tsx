import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TodoType } from '../types/Types';
import { removeTodo } from '../redux/todoSlice'; // Redux aksiyonunu import ediyoruz

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos); // Redux'tan todoları alıyoruz
  const dispatch = useDispatch();

  // Todo silme işlemini gerçekleştiren fonksiyon
  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4'>
      <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>Yapılacaklar Listesi</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo: TodoType) => (
            <div key={todo.id} className='flex justify-between items-center mb-2'>
              <li className='flex-1 p-3 bg-gray-100 rounded-lg shadow'>
                <span className='text-gray-700'>{todo.title}</span>
              </li>
              {/* Silme butonu */}
              <button
                onClick={() => handleDelete(todo.id)} // Todo'yu silerken id'yi gönderiyoruz
                className='bg-red-500 p-3 ml-4 rounded text-white font-bold hover:bg-red-600'
              >
                Sil
              </button>
            </div>
          ))
        ) : (
          <li className='p-3 text-center text-gray-500'>Yapılacak bir şey yok.</li>
        )}
      </ul>
    </div>
  );
}
