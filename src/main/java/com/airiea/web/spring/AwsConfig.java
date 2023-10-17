package com.airiea.web.spring;

import com.airiea.dao.AbilityDao;
import com.airiea.dao.AgentDao;
import com.airiea.dao.TaskDao;
import com.airiea.dao.impl.AbilityDaoImpl;
import com.airiea.dao.impl.AgentDaoImpl;
import com.airiea.dao.impl.TaskDaoImpl;
import com.airiea.dao.publisher.TaskInputPublisher;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsConfig {
    private final static String BETA_ACCESS_KEY_ID = "AKIATILUKYWC6JBENZRC";
    private final static String  BETA_SECRET_ACCESS_KEY = "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";
    private static final String TASK_INPUT_EVENT_SNS_TOPIC_ARN
            = "arn:aws:sns:us-east-1:224119145861:task-input-event-topic-beta";
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

    @Bean(name = "TaskInputPublisher")
    public TaskInputPublisher getTaskInputPublisher() {
        return new TaskInputPublisher(getAmazonSNS(), TASK_INPUT_EVENT_SNS_TOPIC_ARN);
    }

    @Bean(name = "DynamoDBMapper")
    public DynamoDBMapper getDynamoDBMapper() {
        final AmazonDynamoDB dynamoDBClient = getAmazonDynamoDB();
        return new DynamoDBMapper(dynamoDBClient);
    }

    @Bean(name = "AmazonSNS")
    public AmazonSNS getAmazonSNS() {
        return AmazonSNSClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .withCredentials(getAWSCredentialsProvider()).build();
    }

    @Bean(name = "AmazonDynamoDB")
    public AmazonDynamoDB getAmazonDynamoDB() {
        return AmazonDynamoDBClientBuilder.standard()
                .withRegion(Regions.US_EAST_1)
                .withCredentials(getAWSCredentialsProvider()).build();
    }

    @Bean(name = { "AWSCredentialsProvider" })
    public AWSCredentialsProvider getAWSCredentialsProvider() {
        final BasicAWSCredentials awsCredentials = new BasicAWSCredentials(BETA_ACCESS_KEY_ID, BETA_SECRET_ACCESS_KEY);
        return new AWSStaticCredentialsProvider(awsCredentials);
    }
}
