package com.airiea.web.service.impl;

import com.airiea.dao.AbilityDao;
import com.airiea.model.resource.Ability;
import com.airiea.web.service.AbilityService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;


@Service
public class AbilityServiceImpl implements AbilityService {

    private final AbilityDao abilityDao;

    @Inject
    public AbilityServiceImpl(
            @Named("AbilityDao") AbilityDao abilityDao) {
        this.abilityDao = abilityDao;
    }


    @Override
    public Ability getAbilityByName(String abilityName) {
        return abilityDao.getAbilityByName(abilityName);
    }

    @Override
    public void createAbility(Ability ability) {
        abilityDao.createAbility(ability);
    }

    @Override
    public List<Ability> getAllAbilities() {
        return abilityDao.getAllAbilities();
    }
}
