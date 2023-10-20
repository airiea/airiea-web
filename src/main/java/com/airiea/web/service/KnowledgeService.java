package com.airiea.web.service;


import com.airiea.model.resource.Knowledge;

import java.util.List;

public interface KnowledgeService {
    List<Knowledge> getKnowledgeByAgentName(String agentName);
    Knowledge getKnowledgeById(String knowledgeId);
}
