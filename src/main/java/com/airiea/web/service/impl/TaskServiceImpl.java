package com.airiea.web.service.impl;

import com.airiea.dao.TaskDao;
import com.airiea.dao.publisher.TaskInputPublisher;
import com.airiea.model.event.TaskInputEvent;
import com.airiea.model.resource.Task;
import com.airiea.web.service.TaskService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;


@Service
public class TaskServiceImpl implements TaskService {

    private final TaskDao taskDao;
    private final TaskInputPublisher taskInputPublisher;

    @Inject
    public TaskServiceImpl(
            @Named("TaskDao") TaskDao taskDao,
            @Named("TaskInputPublisher") TaskInputPublisher taskInputPublisher) {
        this.taskDao = taskDao;
        this.taskInputPublisher = taskInputPublisher;
    }


    @Override
    public Task getTaskById(String taskId) {
        return taskDao.getTaskById(taskId);
    }

    @Override
    public void completeTaskInput(TaskInputEvent taskInputEvent) {
        taskInputPublisher.sendTaskInputEventToSnsTopic(taskInputEvent);
    }
}
