package com.airiea.web.controller.ability;

import com.airiea.model.resource.Ability;
import com.airiea.model.resource.Task;
import com.airiea.web.service.AbilityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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

    @GetMapping("/{name}")
    public Ability getAbilityByName(@PathVariable String name) {
        return abilityService.getAbilityByName(name);
    }

    @GetMapping("/list-all")
    public List<Ability> listAllAbilities() {
        return abilityService.getAllAbilities();
    }
}