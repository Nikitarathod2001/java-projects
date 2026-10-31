import React from 'react'
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { FaXmark } from 'react-icons/fa6';
import { getAllTasks, createTask, updateTask, deleteTask } from './api/taskService';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTask = async (newTask) => {
    setActionError("");

    try {

      const response = await createTask({
        ...newTask,
        completed: false,
      });

      setTasks((prev) => [
        response.data,
        ...prev,
      ]);
      
    } catch (error) {
      console.error("Error while adding task: ", error);
      setActionError("Unable to add task. Please try again.");
    }
  };

  const handleToggleTask = async (id) => {
    const existingTask = tasks.find((task) => task.id === id);

    if(!existingTask) {
      return;
    }

    setActionError("");

    const updatedTask = {
      ...existingTask,
      completed: !existingTask.completed,
    };

    try {

      const response = await updateTask(id, updatedTask);

      setTasks((prev) => prev.map((task) => task.id === id ? response.data : task));
      
    } catch (error) {
      console.error("Error while updating task: ", error);
      setActionError("Unable to update task. Please try again.");
    }
  };

  const handleDeleteTask = async (id) => {
    setActionError("");

    try {

      await deleteTask(id);

      setTasks((prev) => prev.filter((task) => task.id !== id));
      
    } catch (error) {
      console.error("Error while deleting task: ", error);
      setActionError("Unable to delete task. Please try again.");
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  useEffect(() => {
    const fetchTasks = async () => {
      try {

        const {data} = await getAllTasks();
        setTasks(data);
        
      } catch (error) {
        console.error("Error while fetching tasks: ", error);
        setError("Unable to load tasks. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-10'>

      <main className='mx-auto max-w-2xl space-y-8'>

        <header>
          <h1 className='mt-1 text-4xl font-bold text-deep-ocean text-center underline'>
            My To-Do List
          </h1>
        </header>

        {
          actionError && (
            <div className='flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>

              <p>{actionError}</p>

              <button onClick={() => setActionError("")}
              className='ml-3 font-semibold hover:text-red-900'  
              >
                <FaXmark/>
              </button>

            </div>
          )
        }

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

          {
            loading ? (
              <p className='py-6 text-center text-gray-500'>
                Loading tasks...
              </p>
            ) : error ? (
              <p className='py-6 text-center text-red-500'>
                {error}
              </p>
            ) : (
              <TaskList tasks={tasks}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            )
          }

        </section>

      </main>
      
    </div>
  )
}

export default App
