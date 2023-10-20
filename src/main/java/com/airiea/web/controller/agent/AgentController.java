package com.airiea.web.controller.agent;

import com.airiea.model.resource.Agent;
import com.airiea.web.service.AgentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/agent")
public class AgentController {
    private final AgentService agentService;

    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAgent(@RequestBody Agent agent) {
        agentService.createAgent(agent);
        return ResponseEntity.ok("Agent created successfully!");
    }

    @PutMapping("/edit")
    public ResponseEntity<String> editAgent(@RequestBody Agent agent) {
        agentService.updateAgent(agent);
        return ResponseEntity.ok("Agent updated successfully!");
    }

    @GetMapping("/search/list-all")
    public List<Agent> listAllAgent() {
        return agentService.getAllAgents();
    }

    @GetMapping("/search/{name}")
    public Agent getAgentByName(@PathVariable String name) {
        return agentService.getAgentByName(name);
    }

}