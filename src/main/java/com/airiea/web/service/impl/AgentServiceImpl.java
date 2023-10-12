package com.airiea.web.service.impl;

import com.airiea.dao.AgentDao;
import com.airiea.dao.TaskDao;
import com.airiea.model.resource.Agent;
import com.airiea.model.resource.Task;
import com.airiea.web.service.AgentService;
import com.airiea.web.service.TaskService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;


@Service
public class AgentServiceImpl implements AgentService {

    private final AgentDao agentDao;

    @Inject
    public AgentServiceImpl(
            @Named("AgentDao") AgentDao agentDao) {
        this.agentDao = agentDao;
    }


    @Override
    public Agent getAgentByName(String agentName) {
        return agentDao.getAgentByName(agentName);
    }

    @Override
    public void createAgent(Agent agent) {
        agentDao.createAgent(agent);
    }

    @Override
    public List<Agent> getAllAgents() {
        return agentDao.getAllAgents();
    }
}
