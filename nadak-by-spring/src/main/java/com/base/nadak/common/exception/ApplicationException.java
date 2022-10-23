package com.base.nadak.common.exception;

public class ApplicationException extends Exception {

    private static final long serialVersionUID = -9044887999336926504L;
    private String messageId;
    private String[] arguments;

    public ApplicationException(String messageId, String[] arguments) {
        super();
        this.messageId = messageId;
        this.arguments = arguments;
    }

    public ApplicationException(String messageId) {
        this(messageId, null);
    }

    public ApplicationException(Throwable e) {
        super(e);
        this.messageId = "msg.comm.unknown";
    }

    public String[] getArguments() {
        return this.arguments;
    }

    public String getMessageId() {
        return this.messageId;
    }
}
