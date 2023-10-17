package com.airiea.web.controller.task;

import com.airiea.model.event.CreateTaskPlanEvent;
import com.airiea.model.event.InputTaskEvent;
import com.airiea.web.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task-manager")
public class TaskManagerController {

    private final TaskService taskService;

    public TaskManagerController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/input-task")
    public ResponseEntity<String> inputTask(@RequestBody InputTaskEvent inputTaskEvent) {
        taskService.publishInputTaskEvent(inputTaskEvent);
        return ResponseEntity.ok("Started inputting task event!");
    }

    @PostMapping("/task-plan/create")
    public ResponseEntity<String> createTaskPlan(@RequestBody CreateTaskPlanEvent createTaskPlanEvent) {
        taskService.publishCreateTaskPlanEvent(createTaskPlanEvent);
        return ResponseEntity.ok("Started creating task plan!");
    }

}
