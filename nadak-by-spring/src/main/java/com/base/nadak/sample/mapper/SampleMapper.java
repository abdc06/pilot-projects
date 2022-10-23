package com.base.nadak.sample.mapper;

import com.base.nadak.sample.vo.SampleVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SampleMapper {

    List<SampleVO> selectList();
}
