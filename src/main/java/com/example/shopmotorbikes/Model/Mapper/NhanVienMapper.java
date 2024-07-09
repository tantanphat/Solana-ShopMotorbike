package com.example.shopmotorbikes.Model.Mapper;

import com.example.shopmotorbikes.Entity.NhanVien;
import com.example.shopmotorbikes.Model.Dto.NhanVienDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface NhanVienMapper {
    NhanVienDto nhanVienToNhanVienDto(NhanVien nv);
}
