package com.airiea.web.service;


import com.airiea.model.event.TaskInputEvent;
import com.airiea.model.resource.Task;

public interface TaskService {
    Task getTaskById(String taskId);
    void completeTaskInput(TaskInputEvent taskInputEvent);
}
