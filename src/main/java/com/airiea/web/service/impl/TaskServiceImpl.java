package com.airiea.web.service.impl;

import com.airiea.dao.TaskDao;
import com.airiea.dao.publisher.CreateTaskPlanEventPublisher;
import com.airiea.dao.publisher.InputTaskEventPublisher;
import com.airiea.model.event.CreateTaskPlanEvent;
import com.airiea.model.event.InputTaskEvent;
import com.airiea.model.resource.Task;
import com.airiea.web.service.TaskService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;


@Service
public class TaskServiceImpl implements TaskService {

    private final TaskDao taskDao;

    private final InputTaskEventPublisher inputTaskEventPublisher;
    private final CreateTaskPlanEventPublisher createTaskPlanEventPublisher;

    @Inject
    public TaskServiceImpl(
            @Named("TaskDao") TaskDao taskDao,
            @Named("InputTaskEventPublisher") InputTaskEventPublisher InputTaskEventPublisher,
            @Named("CreateTaskPlanEventPublisher") CreateTaskPlanEventPublisher createTaskPlanEventPublisher) {
        this.taskDao = taskDao;

        this.inputTaskEventPublisher = InputTaskEventPublisher;
        this.createTaskPlanEventPublisher = createTaskPlanEventPublisher;
    }


    @Override
    public Task getTaskById(String taskId) {
        return taskDao.getTaskById(taskId);
    }

    @Override
    public void publishInputTaskEvent(InputTaskEvent InputTaskEvent) {
        inputTaskEventPublisher.sendInputTaskEventToSnsTopic(InputTaskEvent);
    }

    @Override
    public void publishCreateTaskPlanEvent(CreateTaskPlanEvent createTaskPlanEvent) {
        createTaskPlanEventPublisher.sendTaskPlanEventToSnsTopic(createTaskPlanEvent);
    }

}
