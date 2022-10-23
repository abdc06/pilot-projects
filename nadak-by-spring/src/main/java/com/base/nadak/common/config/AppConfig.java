package com.base.nadak.common.config;

import com.base.nadak.WebAppInitializer;
import com.base.nadak.common.serivce.MessageService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Controller;

@PropertySource(value = "classpath:/spring/env/environment.properties")
@PropertySource(value = "classpath:/spring/message/message-common.properties")
@ComponentScan(basePackageClasses = WebAppInitializer.class, excludeFilters = @ComponentScan.Filter(Controller.class))
@Configuration
public class AppConfig {

    @Bean
    MessageService messageService() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasenames("classpath:/spring/env/environment", "classpath:/spring/message/message-common");
        messageSource.setCacheSeconds(60);
        return new MessageService(messageSource);
    }
}
