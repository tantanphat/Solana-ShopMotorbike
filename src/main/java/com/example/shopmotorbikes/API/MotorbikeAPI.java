package com.example.shopmotorbikes.API;

import com.example.shopmotorbikes.Repository.MotorbikeRepository;
import com.example.shopmotorbikes.Service.Impl.MotorbikeServiceImpl;
import com.example.shopmotorbikes.Service.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Motorbike")
public class MotorbikeAPI {
    @Autowired
    private MotorbikeRepository repo;
    @Autowired
    private MotorbikeService motorbikeService = new MotorbikeServiceImpl();

    //API lấy tất cả xe đổ ra trang chủ cilent
    @GetMapping("/get-all-cilent")
    public ResponseEntity<?> getAllMotorbikes() {
        return ResponseEntity.ok(motorbikeService.getAllMotorbikes());
    }
}
