package com.example.shopmotorbikes.Controller;

import com.example.shopmotorbikes.Entity.ChucVu;
import com.example.shopmotorbikes.Entity.Products;
import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import com.example.shopmotorbikes.Service.ChucVuService;
import com.example.shopmotorbikes.Service.MotorbikeService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private ChucVuService chucVuService;
    @Autowired
    private MotorbikeService motorbikeService;


    //Trang chính admim
    @RequestMapping("/trangchu")
    public String HomePage() {
        return "/admin/index";
    }

    //Trang quản lý nhân viên
    @RequestMapping("/Quản-lý-nhân-viên")
    public String ManageEmployeePage() {
        return "/admin/user-table";
    }

    //Trang thêm mới nhân viên
    @RequestMapping("/Thêm-mới-nhân-viên")
    public String AddEmployeePage() {
        return "/admin/user-add";
    }

    //Trang xem chi tiết nhân viên
    @RequestMapping("/Nhân-viên")   
    public String ViewEmployeeDeltailPage() {
        return "/admin/user-details";
    }

    //Trang quản lý chức vụ
    @RequestMapping("/Quản-lý-chức-vụ")
    public String ManageRolePage() {
        return "/admin/role-table";
    }

    @RequestMapping("/products")
    public String ProductsList() {
        return "/admin/products";
    }

    //Trang thêm chức vụ
    @RequestMapping("/Chức-vụ")
    public String AddRolePage(Model model, @RequestParam(name = "maCV",required = false) String maCV) throws NotFoundException {
        ChucVu cv = chucVuService.getChucVu(maCV);
        model.addAttribute("cv", cv);
        System.out.println("Chức vụ: "+chucVuService.auMaCV());
        return "/admin/role-deltail";
    }

    //Trang admin quản lý sản phẩm
    @GetMapping("/Motorbikes")
    public String showProductPage(Model model) {
        List<MotorbikeMainDto> productList = motorbikeService.getAllMotorbikes();
        model.addAttribute("items", productList);
        model.addAttribute("item", new Products());
        return "admin/products";
    }
}
