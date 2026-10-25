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
  
}
