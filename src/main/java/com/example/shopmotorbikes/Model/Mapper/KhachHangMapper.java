package com.example.shopmotorbikes.Model.Mapper;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

@Mapper
public interface KhachHangMapper {
    KhachHangMapper INSTANCE = Mappers.getMapper(KhachHangMapper.class);

    @Mappings({
            @Mapping(source = "emailKh", target = "email"),
            @Mapping(source = "matKhau", target = "matKhau")
    })
    LoginDto loginByEmail(KhachHang kh);
}
