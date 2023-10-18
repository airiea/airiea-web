package com.airiea.web.controller.task;

import com.airiea.model.event.CreateTaskPlanEvent;
import com.airiea.model.event.InputTaskEvent;
import com.airiea.model.resource.Task;
import com.airiea.web.service.TaskService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/task-manager")
public class TaskManagerController {

    private final TaskService taskService;

    public TaskManagerController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable String id) {
        return taskService.getTaskById(id);
    }

    @GetMapping("/entity_id/{id}")
    public List<Task> getTaskListByEntityId(@PathVariable String id) {
        return taskService.getTaskListByEntityId(id);
    }

    @PostMapping("/input")
    public ResponseEntity<String> inputTask(@RequestBody InputTaskEvent inputTaskEvent) {
        taskService.publishInputTaskEvent(inputTaskEvent);
        return ResponseEntity.ok("Started inputting task event!");
    }

    @PostMapping("/plan/create")
    public ResponseEntity<String> createTaskPlan(@RequestBody CreateTaskPlanEvent createTaskPlanEvent) {
        taskService.publishCreateTaskPlanEvent(createTaskPlanEvent);
        return ResponseEntity.ok("Started creating task plan!");
    }

}
