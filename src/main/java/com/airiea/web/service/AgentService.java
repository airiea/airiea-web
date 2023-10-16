package com.airiea.web.service;


import com.airiea.model.resource.Agent;

import java.util.List;

public interface AgentService {
    void updateAgent(Agent agent);
    void createAgent(Agent agent);
    Agent getAgentByName(String agentName);
    List<Agent> getAllAgents();
}
