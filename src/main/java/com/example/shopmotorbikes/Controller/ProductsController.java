package com.example.shopmotorbikes.Controller;

import com.example.shopmotorbikes.Entity.Motorbike;
import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import com.example.shopmotorbikes.Repository.MotorbikeRepository;
import com.example.shopmotorbikes.Service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/Motorbikes")
public class ProductsController {

    @Autowired
    private MotorbikeService motorbikeService;

    @Autowired
    private MotorbikeRepository motorbikeRepository;

    @GetMapping
    public String showProductPage(Model model) {
        List<MotorbikeMainDto> productList = motorbikeService.getAllMotorbikes();
        model.addAttribute("items", productList);
        model.addAttribute("item", new MotorbikeMainDto());
        return "admin/products";
    }

    @PostMapping("/delete")
    public String deleteMotorbike(@RequestParam("maXe") String maXe) {
        motorbikeRepository.deleteById(maXe); // Directly call repository method
        return "redirect:/Motorbikes"; // Redirect to product list page after deletion
    }
    @PostMapping("/create")
    public String createMotorbike(@ModelAttribute MotorbikeMainDto motorbikeMainDto) {
        Motorbike motorbike = motorbikeMainDto.toEntity();
        motorbikeRepository.save(motorbike);
        return "redirect:/Motorbikes";
    }
}
