package com.airiea.web.service;

import com.airiea.model.operation.ChatAgentRequest;
import com.airiea.model.operation.ChatAgentResponse;

public interface AirieaService {

    ChatAgentResponse chatAgent(ChatAgentRequest request);
}
