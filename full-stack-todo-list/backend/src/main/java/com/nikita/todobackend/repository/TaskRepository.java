package com.nikita.todobackend.repository;

import com.nikita.todobackend.Task;
import java.util.List;

public interface TaskRepository {

  List<Task> findAll();

  Task save(Task task);
  
}
