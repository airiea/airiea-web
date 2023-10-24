package com.airiea.web.controller.agent;

import com.airiea.model.operation.ChatAgentRequest;
import com.airiea.model.operation.ChatAgentResponse;
import com.airiea.model.resource.Agent;
import com.airiea.web.service.AgentService;
import com.airiea.web.service.AirieaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/agent")
public class AgentController {
    private final AirieaService airieaService;
    private final AgentService agentService;

    public AgentController(AgentService agentService, AirieaService airieaService) {
        this.airieaService = airieaService;
        this.agentService = agentService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAgent(@RequestBody Agent agent) {
        agentService.createAgent(agent);
        return ResponseEntity.ok("Agent created successfully!");
    }

    @PostMapping("/chat")
    public ChatAgentResponse promptAgent(@RequestBody ChatAgentRequest request) {
        return airieaService.chatAgent(request);
    }

    @PutMapping("/edit/{name}")
    public ResponseEntity<String> editAgent(@RequestBody Agent agent, @PathVariable String name) {
        agentService.updateAgent(agent);
        return ResponseEntity.ok(name + "updated successfully!");
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