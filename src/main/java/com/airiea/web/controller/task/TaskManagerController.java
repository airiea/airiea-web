package com.airiea.web.controller.task;

import com.airiea.model.event.TaskInputEvent;
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

    @PostMapping("/complete")
    public ResponseEntity<String> completeTaskInput(@RequestBody TaskInputEvent taskInputEvent) {
        taskService.completeTaskInput(taskInputEvent);
        return ResponseEntity.ok("Started completing task event!");
    }
}
