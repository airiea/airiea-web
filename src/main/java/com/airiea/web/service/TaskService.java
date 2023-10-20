package com.airiea.web.service;


import com.airiea.model.event.CreateTaskPlanEvent;
import com.airiea.model.event.InputTaskEvent;
import com.airiea.model.resource.Task;

import java.util.List;

public interface TaskService {
    Task getTaskById(String taskId);
    List<Task> getTaskListByEntityId(String entityId);
    void publishInputTaskEvent(InputTaskEvent inputTaskEvent);
    void publishCreateTaskPlanEvent(CreateTaskPlanEvent createTaskPlanEvent);

}
