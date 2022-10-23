package com.base.nadak.sample.service.impl;

import com.base.nadak.sample.mapper.SampleMapper;
import com.base.nadak.sample.service.SampleService;
import com.base.nadak.sample.vo.SampleVO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class SampleServiceImpl implements SampleService {

    final SampleMapper sampleMapper;

    @Override
    public Map<String, Object> selectList() {
        Map<String, Object> result = new HashMap<>();

        List<SampleVO> samples = sampleMapper.selectList();

        result.put("Data", samples);
        result.put("Total", samples.size());

        return result;
    }
}
