package com.airiea.web.spring;

import com.airiea.dao.AbilityDao;
import com.airiea.dao.AgentDao;
import com.airiea.dao.TaskDao;
import com.airiea.dao.impl.AbilityDaoImpl;
import com.airiea.dao.impl.AgentDaoImpl;
import com.airiea.dao.impl.TaskDaoImpl;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsConfig {
    private final static String BETA_ACCESS_KEY_ID = "AKIATILUKYWC6JBENZRC";
    private final static String  BETA_SECRET_ACCESS_KEY = "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";
    @Bean(name = "TaskDao")
    public TaskDao getTaskDao() {
        return new TaskDaoImpl(getDynamoDBMapper());
    }

    @Bean(name = "AgentDao")
    public AgentDao getAgentDao() {
        return new AgentDaoImpl(getDynamoDBMapper());
    }

    @Bean(name = "AbilityDao")
    public AbilityDao getAbilityDao() {
        return new AbilityDaoImpl(getDynamoDBMapper());
    }

    @Bean(name = "DynamoDBMapper")
    public DynamoDBMapper getDynamoDBMapper() {
        final AmazonDynamoDB dynamoDBClient = getAmazonDynamoDB();
        return new DynamoDBMapper(dynamoDBClient);
    }

    @Bean(name = { "AWSCredentialsProvider" })
    public AWSCredentialsProvider getAWSCredentialsProvider() {
        final BasicAWSCredentials awsCredentials = new BasicAWSCredentials(BETA_ACCESS_KEY_ID, BETA_SECRET_ACCESS_KEY);
        return new AWSStaticCredentialsProvider(awsCredentials);
    }

    @Bean(name = "AmazonDynamoDB")
    public AmazonDynamoDB getAmazonDynamoDB() {
        return AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .withCredentials(getAWSCredentialsProvider()).build();
    }
}
