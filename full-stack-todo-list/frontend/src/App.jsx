import React from 'react'
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { FaXmark } from 'react-icons/fa6';

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn Spring Boot',
      description: 'Practice REST APIs',
      completed: false,
    },
    {
      id: 2,
      title: 'Build React components',
      description: 'Create reusable UI components',
      completed: true,
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
      completed: false,
    };

    setTasks((prev) => [task, ...prev]);
  };

  const handleToggleTask = (id) => {
    setTasks((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-10'>

      <main className='mx-auto max-w-2xl space-y-8'>

        <header>
          <h1 className='mt-1 text-4xl font-bold text-deep-ocean text-center underline'>
            My To-Do List
          </h1>
        </header>

        <section className='text-center'>
          <button onClick={() => setIsFormOpen(true)}
            className='w-full rounded-xl bg-ocean-blue px-4 py-3 font-semibold text-white shadow-xl hover:bg-ocean-blue/90 sm:w-auto transition duration-300 cursor-pointer'
          >
            Add a Task
          </button>
        </section>
        <hr className='text-zinc-500'/>

        {
          isFormOpen && (
            <div onClick={() => setIsFormOpen(false)}
              className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
            >

              <div onClick={(e) => e.stopPropagation()}
                className='w-full max-w-lg px-4 py-6 relative'  
              >

                <div className=''>
                  <button type='button'
                    onClick={() => setIsFormOpen(false)}
                    aria-label='Close form'
                    className='absolute right-1 top-1 z-10 text-black hover:text-black/50 cursor-pointer'
                  >
                    <FaXmark/>
                  </button>

                  <TaskForm onAddTask={(newTask) => {
                    handleAddTask(newTask);
                    setIsFormOpen(false);
                  }}/>
                </div>

              </div>

            </div>
          )
        }

        <section className='space-y-4'>
          <div className='flex items-center justify-between gap-3'>

            <span className='rounded-full bg-aqua/10 px-3 py-1 text-sm font-medium text-sea-blue'>
              {completedCount} of {tasks.length} completed
            </span>
          </div>

          <TaskList tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />

        </section>

      </main>
      
    </div>
  )
}

export default App
