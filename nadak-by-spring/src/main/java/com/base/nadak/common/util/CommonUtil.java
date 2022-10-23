package com.base.nadak.common.util;

import com.base.nadak.common.serivce.MessageService;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class CommonUtil {

    public static String stackTraceToString(Throwable e) {
        StringBuffer sb = new StringBuffer();
        sb.append("System error occurred.");
        return sb.toString();
    }
}
