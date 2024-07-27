package com.example.shopmotorbikes.API;

import com.example.shopmotorbikes.Model.Dto.LoginDto;
import com.example.shopmotorbikes.Service.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/khach-hang")
public class KhachHangAPI {
    @Autowired
    private KhachHangService khachHangService;

}
