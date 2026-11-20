package com.nikita.jobportal.service;

import com.nikita.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;
import com.nikita.jobportal.entity.Job;
import java.util.List;

@Service
public class JobService {

  private final JobRepository jobRepository;

  public JobService(JobRepository jobRepository) {
    this.jobRepository = jobRepository;
  }

  public Job createJob(Job job) {
    return jobRepository.save(job);
  }

  public List<Job> getAllJobs() {
    return jobRepository.findAll();
  }

  public Job getJobById(Long id) {
    return jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found."));
  }

  public Job updateJob(Long id, Job updatedJob) {
    Job existingJob = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));

    existingJob.setTitle(updatedJob.getTitle());
    existingJob.setDescription(updatedJob.getDescription());
    existingJob.setCompanyName(updatedJob.getCompanyName());
    existingJob.setLocation(updatedJob.setLocation());
    existingJob.setSalary(updatedJob.getSalary());
    existingJob.setJobType(updatedJob.getJobType());
    existingJob.setExperienceLevel(updatedJob.getExperienceLevel());

    return jobRepository.save(existingJob);
  }
  
}
