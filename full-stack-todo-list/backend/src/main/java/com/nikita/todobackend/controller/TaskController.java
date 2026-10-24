package com.nikita.todobackend.controller;

import com.nikita.todobackend.Task;
import com.nikita.todobackend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController 
@RequestMapping("/api/tasks")
public class TaskController {

  private final TaskService taskService;

  public TaskController(TaskService taskService) {
    this.taskService = taskService;
  }

  @GetMapping 
  public List<Task> getAllTasks() {
    return taskService.getAllTasks();
  }

  @PostMapping
  public Task createTask(@RequestBody Task task) {
    return taskService.createTask(task);
  }
  
}
