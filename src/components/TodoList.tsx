import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TodoType } from '../types/Types';
import { removeTodo, updateTodo,  } from '../redux/todoSlice'; // Redux aksiyonlarını import ediyoruz

export default function TodoList() {
  const [editId, setEditId] = useState<number | null>(null); // Düzenlenen todo'nun ID'sini takip etmek için
  const [newTodo, setNewTodo] = useState<string>(''); // Düzenleme yapılan todo'nun başlığı
  const todos = useSelector((state: RootState) => state.todo.todos); // Redux'tan todoları alıyoruz
  const dispatch = useDispatch();

  // Todo silme işlemini gerçekleştiren fonksiyon
  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  // Edit modunu açmak için fonksiyon
  const handleEdit = (todo: TodoType) => {
    setEditId(todo.id); // Düzenlenecek todo'nun ID'sini kaydediyoruz
    setNewTodo(todo.title); // Düzenlenecek todo'nun başlığını input'a koyuyoruz
  };

  // Düzenlemeyi onaylamak için fonksiyon
  const handleUpdate = (id: number) => {
    if (newTodo.trim()) {
      dispatch(updateTodo({ id, title: newTodo })); // Redux'ta güncelleme işlemi
      setEditId(null); // Düzenleme modundan çık
      setNewTodo(''); // Yeni todo başlığını sıfırla
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4'>
      <h2 className='text-2xl font-bold mb-4 text-center text-gray-800'>Yapılacaklar Listesi</h2>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo: TodoType) => (
            <div key={todo.id} className='flex justify-between items-center mb-2'>
              <div className='flex-1 p-3 bg-gray-100 rounded-lg shadow'>
                {editId === todo.id ? (
                  <input
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className='w-full px-2 py-1 border border-gray-300 rounded'
                  />
                ) : (
                  <span className='text-gray-700'>{todo.title}</span>
                )}
              </div>
              {/* Silme butonu */}
              <button
                onClick={() => handleDelete(todo.id)} // Todo'yu silerken id'yi gönderiyoruz
                className='bg-red-500 p-3 ml-4 rounded text-white font-bold hover:bg-red-600'
              >
                Sil
              </button>
              {/* Edit ve onayla butonu */}
              <button
                onClick={() => (editId === todo.id ? handleUpdate(todo.id) : handleEdit(todo))} // Edit ya da güncelle
                className='bg-blue-500 p-3 ml-4 rounded text-white font-bold hover:bg-blue-600'
              >
                {editId === todo.id ? 'Onayla' : 'Düzenle'}
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
