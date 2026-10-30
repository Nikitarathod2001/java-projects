import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, onToggle, onDelete}) => {

  if(tasks.length === 0) {
    return (
      <div className='rounded-xl border border-dashed border-gray-300 p-8 text-center'>

        <p className='font-medium text-gray-600'>
          No tasks yet
        </p>

        <p className='mt-1 text-sm text-gray-400'>
          Add your first task to get started!
        </p>

      </div>
    );
  }

  return (
    <div className='space-y-3'>

      {
        tasks.map((task) => (
          <TaskItem key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      }
      
    </div>
  )
}

export default TaskList
