package com.example.shopmotorbikes.Controller;

import com.example.shopmotorbikes.Entity.Motorbike;
import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import com.example.shopmotorbikes.Service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/E-StoreX")
public class CilentController {
    @Autowired
    private MotorbikeService motorbikeService;

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

    //Trang sản phẩm chi tiết
    @GetMapping("/Motorbike")
    public String ProductDetailPage(Model model, @RequestParam(name = "tenXe",required = false) String tenXe) {
        MotorbikeMainDto mb = motorbikeService.getOneMotorbikeByName(tenXe);
        System.out.println(mb);
        model.addAttribute("motorbike", mb);
        return "/kiosk-bike/shop-single";
    }


}
