package com.base.nadak.common.filter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class HTMLTagFilterRequestWrapper extends HttpServletRequestWrapper {
    public HTMLTagFilterRequestWrapper(HttpServletRequest request) {
        super(request);
    }

    public String[] getParameterValues(String parameter) {
        String[] values = super.getParameterValues(parameter);
        if (values == null) {
            return null;
        } else {
            for(int i = 0; i < values.length; ++i) {
                if (values[i] == null) {
                    values[i] = null;
                } else {
                    StringBuffer strBuff = new StringBuffer();

                    for(int j = 0; j < values[i].length(); ++j) {
                        char c = values[i].charAt(j);
                        switch (c) {
                            case '"':
                                strBuff.append("&quot;");
                                break;
                            case '&':
                                strBuff.append("&amp;");
                                break;
                            case '\'':
                                strBuff.append("&apos;");
                                break;
                            case '<':
                                strBuff.append("&lt;");
                                break;
                            case '>':
                                strBuff.append("&gt;");
                                break;
                            default:
                                strBuff.append(c);
                        }
                    }

                    values[i] = strBuff.toString();
                }
            }

            return values;
        }
    }

    public String getParameter(String parameter) {
        String value = super.getParameter(parameter);
        if (value == null) {
            return null;
        } else {
            StringBuffer strBuff = new StringBuffer();

            for(int i = 0; i < value.length(); ++i) {
                char c = value.charAt(i);
                switch (c) {
                    case '"':
                        strBuff.append("&quot;");
                        break;
                    case '&':
                        strBuff.append("&amp;");
                        break;
                    case '\'':
                        strBuff.append("&apos;");
                        break;
                    case '<':
                        strBuff.append("&lt;");
                        break;
                    case '>':
                        strBuff.append("&gt;");
                        break;
                    default:
                        strBuff.append(c);
                }
            }

            value = strBuff.toString();
            return value;
        }
    }
}
