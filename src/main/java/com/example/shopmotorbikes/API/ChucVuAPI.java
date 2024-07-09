package com.example.shopmotorbikes.API;

import com.example.shopmotorbikes.Entity.ChucVu;
import com.example.shopmotorbikes.Service.ChucVuService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chuc-vu")
public class ChucVuAPI {
    @Autowired
    private ChucVuService chucVuService;
    //Lấy danh sách chức vụ
    @GetMapping("")
    public ResponseEntity<?> getAllChucVu() {
        return ResponseEntity.ok(chucVuService.getAllChucVu());
    }

    //Lấy chức vụ theo mã
    @GetMapping("/one")
    public ResponseEntity<?> getOneChucVuById(@RequestParam("maCV") String maCV) throws NotFoundException {
        return ResponseEntity.ok(chucVuService.getChucVu(maCV));
    }

    //Thêm chức vụ
    @PostMapping("/add")
    public ResponseEntity<?> addChucVu(@RequestBody ChucVu chucVu) {
        try {
            chucVu.setMaChucVu(chucVuService.auMaCV());
            chucVuService.addChucVu(chucVu);
            return ResponseEntity.ok("Thêm chức vụ thành công");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Thêm chức vụ thất bại");
        }
    }

    //Xóa chức vụ
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteChucVu(@RequestParam("maCV") String maCV) {
        try {
            chucVuService.deleteChucVu(maCV);
            return ResponseEntity.ok("Xóa chức vụ thành công");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Xóa chức vụ thất bại");
        }
    }

    //Cập nhật chức vụ
    @PutMapping("/update")
    public ResponseEntity<?> updateChucVu(@RequestBody ChucVu chucVu) {
        try {
            chucVuService.updateChucVu(chucVu);
            return ResponseEntity.ok("Cập nhật chức vụ thành công");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Cập nhật chức vụ thất bại");
        }
    }

}
