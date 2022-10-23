package com.base.nadak.common.serivce;

import org.springframework.context.support.ReloadableResourceBundleMessageSource;

import javax.annotation.PostConstruct;

public class MessageService {

    private ReloadableResourceBundleMessageSource source;

    private static ReloadableResourceBundleMessageSource messageSource;

    public MessageService(ReloadableResourceBundleMessageSource source) {
        this.source = source;
    }

    @PostConstruct
    public void initialize() {
        messageSource = source;
    }

    public static String getMessage(String messageCd) {
        return messageSource.getMessage(messageCd, null, null);
    }

    public static String getMessage(String messageCd, String... messageArgs) {
        return messageSource.getMessage(messageCd, messageArgs, null);
    }
}
