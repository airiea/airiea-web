package com.airiea.web.controller;

import com.airiea.model.operation.GetTaskRequest;
import com.airiea.model.operation.GetTaskResponse;
import com.airiea.model.resource.Task;
import com.airiea.web.constant.ViewPath;
import com.airiea.web.service.TaskService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/{id}")
    public Task getTaskById(@RequestParam(name="id") final String taskId) {
        return taskService.getTaskById(taskId);
    }
}
