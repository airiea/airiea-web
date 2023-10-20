package com.airiea.web.controller.knowledge;

import com.airiea.model.resource.Knowledge;
import com.airiea.web.service.KnowledgeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/knowledge/search")
public class KnowledgeController {

    private final KnowledgeService knowledgeService;

    public KnowledgeController(KnowledgeService knowledgeService) {
        this.knowledgeService = knowledgeService;
    }

    @GetMapping("/agent_name/{name}")
    public List<Knowledge> getKnowledgeListByAgentName(@PathVariable String name) {
        return knowledgeService.getKnowledgeByAgentName(name);
    }

    @GetMapping("/{id}")
    public Knowledge getKnowledgeById(@PathVariable String id) {
        return knowledgeService.getKnowledgeById(id);
    }
}
