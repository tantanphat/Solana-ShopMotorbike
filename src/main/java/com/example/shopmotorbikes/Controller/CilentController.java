package com.example.shopmotorbikes.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/E-StoreX")
public class CilentController {

    //Trang chủ
    @GetMapping("/Trang-chủ")
    public String HomePage() {
        return "/kiosk-bike/index";
    }

    //Trang about
    @GetMapping("/About")
    public String AboutPage() {
        return "/kiosk-bike/about";
    }

    //Trang liên hệ
    @GetMapping("/Liên-hệ")
    public String ContactPage() {
        return "/kiosk-bike/contact";
    }


}
