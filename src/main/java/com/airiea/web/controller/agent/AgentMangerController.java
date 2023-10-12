package com.airiea.web.controller.agent;

import com.airiea.model.resource.Agent;
import com.airiea.web.service.AgentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/agent-manager")
public class AgentMangerController {
    private final AgentService agentService;

    public AgentMangerController(AgentService agentService) {
        this.agentService = agentService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAgent(@RequestBody Agent agent) {
        agentService.createAgent(agent);
        return ResponseEntity.ok("Agent created successfully!");
    }

    @PostMapping("/list-all")
    public List<Agent> listAllAgent() {
        return agentService.getAllAgents();
    }
}