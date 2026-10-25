package com.nikita.todobackend.repository;

import com.nikita.todobackend.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
