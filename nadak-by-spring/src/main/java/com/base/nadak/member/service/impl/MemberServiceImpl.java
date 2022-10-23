package com.base.nadak.member.service.impl;

import com.base.nadak.common.exception.ApplicationException;
import com.base.nadak.member.mapper.MemberMapper;
import com.base.nadak.member.service.MemberService;
import com.base.nadak.member.vo.MemberVO;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    @Override
    public Map<String, Object> selectList(MemberVO vo) throws ApplicationException, Exception {
        Map<String, Object> result = new HashMap<>();
        List<MemberVO> list = new ArrayList<>();
        int totalCount = 0;

        try {
            list = memberMapper.selectList(vo);
            if(list.size() > 0) {
                totalCount = list.get(0).getTotalCount();
            }
        } catch (DataAccessException e) {
            throw new ApplicationException(e);
        }

        result.put("Data", list);
        result.put("Total", totalCount);

        return result;
    }
}
