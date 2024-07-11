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

    //Trang chủ http://localhost:8080/E-StoreX/Trang-chu
    @GetMapping("/Trang-chu")
    public String HomePage() {
        return "/kiosk-bike/index";
    }

    //Trang about http://localhost:8080/E-StoreX/About
    @GetMapping("/About")
    public String AboutPage() {
        return "/kiosk-bike/about";
    }

    //Trang liên hệ http://localhost:8080/E-StoreX/Contact
    @GetMapping("/Contact")
    public String ContactPage() {
        return "/kiosk-bike/contact";
    }

    //Trang check out http://localhost:8080/E-StoreX/Checkout?tenXe=CBR1000RR-R
    @GetMapping("/Checkout")
    public String CheckoutPage(Model model, @RequestParam(name = "tenXe") String tenXe) {
        MotorbikeMainDto mb = motorbikeService.getOneMotorbikeByName(tenXe);
        model.addAttribute("motorbike", mb);
        return "/kiosk-bike/checkout";
    }

    //Trang sản phẩm chi tiết  http://localhost:8080/E-StoreX/Motorbike?tenXe=CBR1000RR-R
    @GetMapping("/Motorbike")
    public String ProductDetailPage(Model model, @RequestParam(name = "tenXe") String tenXe) {
        MotorbikeMainDto mb = motorbikeService.getOneMotorbikeByName(tenXe);
        model.addAttribute("motorbike", mb);
        return "/kiosk-bike/shop-single";
    }


}
