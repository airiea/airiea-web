package com.airiea.web.service;


import com.airiea.model.operation.GetTaskRequest;
import com.airiea.model.operation.GetTaskResponse;
import com.airiea.model.resource.Task;

public interface TaskService {
    Task getTaskById(String taskId);
}
