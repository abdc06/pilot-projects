package com.base.nadak.main.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainViewController {

    @GetMapping("/portal/main")
    public String main() {
        return "/portal/main";
    }
}
