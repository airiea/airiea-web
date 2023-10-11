package com.airiea.web.service.impl;

import com.airiea.dao.TaskDao;
import com.airiea.model.operation.GetTaskRequest;
import com.airiea.model.operation.GetTaskResponse;
import com.airiea.model.resource.Task;
import com.airiea.web.service.TaskService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;


@Service
public class TaskServiceImpl implements TaskService {

    private final TaskDao taskDao;

    @Inject
    public TaskServiceImpl(
            @Named("TaskDao") TaskDao taskDao) {
        this.taskDao = taskDao;
    }


    @Override
    public Task getTaskById(String taskId) {
        return taskDao.getTaskById(taskId);
    }
}
