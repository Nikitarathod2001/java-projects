package com.nikita.jobportal.service;

import com.nikita.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;
import com.nikita.jobportal.entity.Job;

@Service
public class JobService {

  private final JobRepository jobRepository;

  public JobService(JobRepository jobRepository) {
    this.jobRepository = jobRepository;
  }

  public Job createJob(Job job) {
    return jobRepository.save(job);
  }
  
}
