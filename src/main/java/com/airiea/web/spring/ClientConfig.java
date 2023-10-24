package com.airiea.web.spring;

import com.airiea.openai.client.OpenAiClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ClientConfig {

    @Bean(name = "OpenAiClient")
    public OpenAiClient getOpenAiService() {
        return new OpenAiClient("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");
    }

}
