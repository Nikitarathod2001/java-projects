import React, { useState } from 'react'

const TaskForm = ({onAddTask}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!title.trim()) {
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}
      className='space-y-4 rounded-xl bg-white px-6 py-8 shadow'
    >

      <input type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter your task here...'
        className='w-full rounded-lg border border-gray-300 p-3 outline-none'
      />

      <textarea rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Add a description (optional)...'
        className='w-full rounded-lg border border-gray-300 p-3 outline-none'
      />

      <button type='submit'
        className='w-full rounded-lg bg-sea-blue px-4 py-3 font-semibold text-white hover:bg-sea-blue/90 transition-all duration-300 cursor-pointer'
      >
        Add Task
      </button>

    </form>
  )
}

export default TaskForm
