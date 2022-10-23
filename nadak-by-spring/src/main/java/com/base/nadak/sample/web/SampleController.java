package com.base.nadak.sample.web;

import com.base.nadak.sample.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@RestController
public class SampleController {

    final SampleService sampleService;

    @GetMapping("/samples")
    public Map<String, Object> selectList() {
        Map<String, Object> result = sampleService.selectList();
        return result;
    }
}
