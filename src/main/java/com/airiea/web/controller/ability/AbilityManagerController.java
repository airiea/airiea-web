package com.airiea.web.controller.ability;

import com.airiea.model.resource.Ability;
import com.airiea.web.service.AbilityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ability-manager")
public class AbilityManagerController {
    private final AbilityService abilityService;

    public AbilityManagerController(AbilityService abilityService) {
        this.abilityService = abilityService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAgent(@RequestBody Ability ability) {
        abilityService.createAbility(ability);
        return ResponseEntity.ok("Agent created successfully!");
    }

    @PostMapping("/list-all")
    public List<Ability> listAllAbilities() {
        return abilityService.getAllAbilities();
    }
}