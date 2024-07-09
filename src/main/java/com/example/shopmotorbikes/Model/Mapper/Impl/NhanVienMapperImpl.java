package com.example.shopmotorbikes.Model.Mapper.Impl;

import com.example.shopmotorbikes.Entity.NhanVien;
import com.example.shopmotorbikes.Model.Dto.NhanVienDto;
import com.example.shopmotorbikes.Model.Mapper.NhanVienMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NhanVienMapperImpl implements NhanVienMapper {

    @Override
    public NhanVienDto nhanVienToNhanVienDto(NhanVien nv) {
        if (nv == null) {
            return null;
        }
        NhanVienDto nhanVienDto = new NhanVienDto();
        nhanVienDto.setMaNV(nv.getMaNV());
        nhanVienDto.setNameNV(nv.getNameNV());
        nhanVienDto.setGenderNV(nv.getGenderNV());
        nhanVienDto.setDiaChi(nv.getDiaChi());
        nhanVienDto.setPhoneNV(nv.getPhoneNV());
        nhanVienDto.setEmailNV(nv.getEmailNV());
        nhanVienDto.setTienLuong(nv.getTienLuong());
        nhanVienDto.setAvatar(nv.getAvatar());
        nhanVienDto.setMatKhau(nv.getMatKhau());
        nhanVienDto.setIsStatus(nv.getIsStatus());
        nhanVienDto.setMaChucVu(nv.getMaChucVu());
        return nhanVienDto;
    }

}
