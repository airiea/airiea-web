package com.airiea.web.service;

import com.airiea.model.resource.Ability;

import java.util.List;

public interface AbilityService {
    Ability getAbilityByName(String abilityName);
    void updateAbility(Ability ability);
    void createAbility(Ability ability);
    List<Ability> getAllAbilities();
}
