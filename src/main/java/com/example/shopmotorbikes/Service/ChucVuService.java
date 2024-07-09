package com.example.shopmotorbikes.Service;


import com.example.shopmotorbikes.Entity.ChucVu;
import javassist.NotFoundException;

import java.util.List;
import java.util.Optional;

public interface ChucVuService {
    //Lấy all chức vụ
    List<ChucVu> getAllChucVu();

    //Lấy chức vụ theo mã chức vụ
    ChucVu getChucVu(String maCV) throws NotFoundException;

    //Lấy func của auto tăng mã chức vụ
    String auMaCV();

    //Thêm mới 1 chức vụ
    void addChucVu(ChucVu chucVu);

    //Xóa chức vụ theo mã
    void deleteChucVu(String maCV);

    //Sửa thông tin chức vụ
    void updateChucVu(ChucVu chucVu);
}
