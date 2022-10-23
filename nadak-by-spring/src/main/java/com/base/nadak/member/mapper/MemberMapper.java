package com.base.nadak.member.mapper;

import com.base.nadak.member.vo.MemberVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {

    List<MemberVO> selectList(MemberVO vo);
}
