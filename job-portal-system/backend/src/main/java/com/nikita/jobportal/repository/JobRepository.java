package com.nikita.jobportal.repository;

import com.nikita.jobportal.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
  
}
