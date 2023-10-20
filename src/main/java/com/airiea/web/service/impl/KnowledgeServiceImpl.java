package com.airiea.web.service.impl;

import com.airiea.dao.KnowledgeDao;
import com.airiea.model.resource.Knowledge;
import com.airiea.web.service.KnowledgeService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;


@Service
public class KnowledgeServiceImpl implements KnowledgeService {

    private final KnowledgeDao knowledgeDao;

    @Inject
    public KnowledgeServiceImpl(
            @Named("KnowledgeDao") KnowledgeDao knowledgeDao) {
        this.knowledgeDao = knowledgeDao;
    }


    @Override
    public List<Knowledge> getKnowledgeByAgentName(String agentName) {
        return knowledgeDao.getKnowledgeByAgentName(agentName);
    }

    @Override
    public Knowledge getKnowledgeById(String knowledgeId) {
        return knowledgeDao.getKnowledgeById(knowledgeId);
    }

}
