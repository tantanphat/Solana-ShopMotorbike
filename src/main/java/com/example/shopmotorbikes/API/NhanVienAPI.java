package com.example.shopmotorbikes.API;

import com.example.shopmotorbikes.Model.Dto.NhanVienDto;
import com.example.shopmotorbikes.Service.Impl.NhanVienServiceImpl;
import com.example.shopmotorbikes.Service.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/nhan-vien")
public class NhanVienAPI {
    @Autowired
    private NhanVienService nhanVienService = new NhanVienServiceImpl();

    //Lấy list nhân viên
    @GetMapping("/get-all-nhan-vien")
    public ResponseEntity<?> getAllNhanVien() {
        return ResponseEntity.ok(nhanVienService.getNhanVienDtoList());
    }
}
