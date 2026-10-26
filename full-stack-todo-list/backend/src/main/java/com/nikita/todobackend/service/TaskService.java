package com.nikita.todobackend.service;

import com.nikita.todobackend.Task;
import com.nikita.todobackend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service 
public class TaskService {

  private final TaskRepository taskRepository;
  
  public TaskService(TaskRepository taskRepository) {
    this.taskRepository = taskRepository;
  }

  public List<Task> getAllTasks() {
    return taskRepository.findAll();
  }

  public Task createTask(Task task) {
    task.setId(null);
    return taskRepository.save(task);
  }

  public Task getTaskById(Long id) {
    return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
  }

  public Task updateTask(Long id, Task updatedTask) {
    Task existingTask = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found with id: " + id));

    existingTask.setTitle(updatedTask.getTitle());
    existingTask.setDescription(updatedTask.getDescription());
    existingTask.setCompleted(updatedTask.isCompleted());

    return taskRepository.save(existingTask);
  }

  public void deleteTask(Long id) {
    Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found with id: " + id));

    taskRepository.delete(task);
  }
  
}
