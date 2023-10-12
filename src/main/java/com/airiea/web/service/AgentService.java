package com.airiea.web.service;


import com.airiea.model.resource.Agent;
import com.airiea.model.resource.Task;

import java.util.List;

public interface AgentService {
    Agent getAgentByName(String agentName);
    void createAgent(Agent agent);
    List<Agent> getAllAgents();
}
