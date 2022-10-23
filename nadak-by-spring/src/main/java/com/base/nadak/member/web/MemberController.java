package com.base.nadak.member.web;

import com.base.nadak.common.exception.ApplicationException;
import com.base.nadak.common.serivce.MessageService;
import com.base.nadak.common.util.CommonUtil;
import com.base.nadak.member.service.MemberService;
import com.base.nadak.member.vo.MemberVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Controller
public class MemberController {

    private final MemberService memberService;

    @ResponseBody
    @GetMapping("/admin/member/selectMemberList")
    public Map<String, Object> selectMemberList(MemberVO vo) {
        Map<String, Object> result = new HashMap<>();
        Map<String, Object> map = new HashMap<>();
        int code = 0;
        String message = "";

        try {
            result = memberService.selectList(vo);
            code = 0;
            message = MessageService.getMessage("select.done");
        } catch (ApplicationException e) {
            log.error(CommonUtil.stackTraceToString(e).replaceAll("[\r\n]", ""));
            code = -1;
            message = MessageService.getMessage("select.fail");
        } catch (Exception e) {
            log.error(CommonUtil.stackTraceToString(e).replaceAll("[\r\n]", ""));
            code = -1;
            message = MessageService.getMessage("select.fail");
        }

        map.put("Code", code);
        map.put("Message", message);
        result.put("Result", map);

        return result;
    }
}
