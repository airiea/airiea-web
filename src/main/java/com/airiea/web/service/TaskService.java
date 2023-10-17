package com.airiea.web.service;


import com.airiea.model.event.CreateTaskPlanEvent;
import com.airiea.model.event.InputTaskEvent;
import com.airiea.model.resource.Task;

public interface TaskService {
    Task getTaskById(String taskId);
    void publishInputTaskEvent(InputTaskEvent inputTaskEvent);
    void publishCreateTaskPlanEvent(CreateTaskPlanEvent createTaskPlanEvent);
}
