package com.base.nadak.member.service;

import com.base.nadak.common.exception.ApplicationException;
import com.base.nadak.member.vo.MemberVO;

import java.util.Map;

public interface MemberService {

    Map<String, Object> selectList(MemberVO vo) throws ApplicationException, Exception;
}
