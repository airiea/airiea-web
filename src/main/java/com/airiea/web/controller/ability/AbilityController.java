package com.airiea.web.controller.ability;

import com.airiea.model.resource.Ability;
import com.airiea.web.service.AbilityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ability")
public class AbilityController {
    private final AbilityService abilityService;

    public AbilityController(AbilityService abilityService) {
        this.abilityService = abilityService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAgent(@RequestBody Ability ability) {
        System.out.println(ability);
        abilityService.createAbility(ability);
        return ResponseEntity.ok("Ability created successfully!");
    }

    @GetMapping("/search/{name}")
    public Ability getAbilityByName(@PathVariable String name) {
        return abilityService.getAbilityByName(name);
    }

    @PutMapping("/edit/{name}")
    public ResponseEntity<String> editAbility(@RequestBody Ability ability, @PathVariable String name) {
        abilityService.updateAbility(ability);
        return ResponseEntity.ok(name + "updated successfully!");
    }

    @GetMapping("/search/list-all")
    public List<Ability> listAllAbilities() {
        return abilityService.getAllAbilities();
    }
}