package com.nikita.todobackend.service;

import com.nikita.todobackend.Task;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service 
public class TaskService {

  private final List<Task> tasks = new ArrayList<>();
  private Long nextId = 1L;

  public List<Task> getAllTasks() {
    return tasks;
  }

  public Task createTask(Task task) {
    task.setId(nextId++);
    tasks.add(task);
    return task;
  }
  
}
