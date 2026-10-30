import React from 'react';
import {FaCheck} from "react-icons/fa";

const TaskItem = ({task, onToggle, onDelete}) => {
  return (
    <div className='flex items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm'>

      <div className='flex items-center gap-3'>

        <button type='button' onClick={() => onToggle(task.id)} className={`flex h-5 w-5 items-center justify-center rounded-full border cursor-pointer ${task.completed ? "bg-green-600 text-white" : "bg-white text-white border-zinc-500"}`}>
          <FaCheck size={11} />
        </button>

        <div>

          <h3 className={`font-semibold ${task.completed ? "text-gray-300 line-through" : "text-gray-600"}`}>
            {task.title}
          </h3>

          {
            task.description && (
              <p className='mt-1 text-sm text-gray-500'>
                {task.description}
              </p>
            )
          }

        </div>

      </div>

      <button onClick={() => onDelete(task.id)}
        className='rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition duration-300 cursor-pointer'  
      >
        Delete
      </button>
      
    </div>
  )
}

export default TaskItem
