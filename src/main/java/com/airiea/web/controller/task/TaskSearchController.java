package com.airiea.web.controller.task;

import com.airiea.model.resource.Task;
import com.airiea.web.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/task-search")
public class TaskSearchController {
    private final TaskService taskService;

    public TaskSearchController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/{id}")
    public List<Task> getTaskById(@PathVariable String id) {
        return Collections.singletonList(taskService.getTaskById(id));
    }
}
