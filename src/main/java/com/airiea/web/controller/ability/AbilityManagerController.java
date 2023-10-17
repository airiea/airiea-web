package com.airiea.web.controller.ability;

import com.airiea.model.resource.Ability;
import com.airiea.web.service.AbilityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/edit/{name}")
    public ResponseEntity<String> updateAbility(@RequestBody Ability ability) {
        abilityService.updateAbility(ability);
        return ResponseEntity.ok("Ability updated successfully!");
    }

    @GetMapping("/list-all")
    public List<Ability> listAllAbilities() {
        return abilityService.getAllAbilities();
    }
}