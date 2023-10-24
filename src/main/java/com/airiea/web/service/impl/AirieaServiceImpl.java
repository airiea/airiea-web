package com.airiea.web.service.impl;

import com.airiea.dao.KnowledgeDao;
import com.airiea.model.enums.Model;
import com.airiea.model.operation.ChatAgentRequest;
import com.airiea.model.operation.ChatAgentResponse;
import com.airiea.model.resource.Knowledge;
import com.airiea.openai.client.OpenAiClient;
import com.airiea.openai.model.enums.Role;
import com.airiea.openai.model.operation.chat.ChatCompletion;
import com.airiea.openai.model.operation.chat.ChatCompletionRequest;
import com.airiea.openai.model.resource.Message;
import com.airiea.web.service.AirieaService;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class AirieaServiceImpl implements AirieaService {

    private final OpenAiClient openAiClient;
    private final KnowledgeDao knowledgeDao;

    @Inject
    public AirieaServiceImpl(
            @Named("OpenAiClient") OpenAiClient openAiClient,
            @Named("KnowledgeDao") KnowledgeDao knowledgeDao) {
        this.openAiClient = openAiClient;
        this.knowledgeDao = knowledgeDao;
    }


    @Override
    public ChatAgentResponse chatAgent(ChatAgentRequest request) {
            String responseDelimiter = request.getResponseDelimiter();

            ChatCompletionRequest chatCompletionRequest = buildChatCompletionRequest(request);
        try {
            ChatCompletion chatCompletion = openAiClient.createChatCompletion(chatCompletionRequest);
            String content = formatChatCompletionTextOutput(chatCompletion, responseDelimiter);
            return ChatAgentResponse.builder().content(content).build();
        } catch (Exception e) {
            System.out.println("chatCompletionRequest: " + chatCompletionRequest);
            throw e;
        }
    }

    private ChatCompletionRequest buildChatCompletionRequest(ChatAgentRequest request) {
        Model model = request.getModel();
        Double temperature = request.getTemperature();
        String prompt = request.getPrompt();
        Integer maxTokens = request.getMaxTokens();
        List<String> knowledgeIds = request.getKnowledgeIds();

        List<Message> messages = new ArrayList<>();

        for (String knowledgeId : knowledgeIds) {
            Knowledge knowledge = knowledgeDao.getKnowledgeById(knowledgeId);
            messages.add(buildMessage(Role.assistant.name(), knowledge.getContent()));
        }

        messages.add(buildMessage(Role.user.name(), prompt));

        return ChatCompletionRequest.builder()
                .model(model.getName())
                .temperature(temperature)
                .maxTokens(maxTokens)
                .messages(messages).build();
    }

    private Message buildMessage(String role, String content) {
        Message message = new Message();
        message.setRole(role);
        message.setContent(content);
        return message;
    }

    private String formatChatCompletionTextOutput(ChatCompletion chatCompletion, String responseDelimiter) {
        return chatCompletion.getChoices().stream()
                .map(choice -> choice.getMessage().getContent())
                .collect(Collectors.joining(responseDelimiter));
    }

}
