package com.example.shopmotorbikes.Model.Mapper.Impl;

import com.example.shopmotorbikes.Entity.Motorbike;
import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import com.example.shopmotorbikes.Model.Mapper.MotorbikeMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Component
public class MotorbikeMapperImpl implements MotorbikeMapper {

    @Override
    public MotorbikeMainDto motorbikeToMotorbikDto(Motorbike mb) {
        if(mb == null){
            return null;
        }

        MotorbikeMainDto motorbikeMainDto = new MotorbikeMainDto();
        motorbikeMainDto.setMaXe(mb.getMaXe());
        motorbikeMainDto.setTenXe(mb.getTenXe());
        motorbikeMainDto.setGiaXe(mb.getGiaXe());
        motorbikeMainDto.setDungTich(mb.getDungTich());
        motorbikeMainDto.setTrangThai(mb.getTrangThai());
        motorbikeMainDto.setMauXe(mb.getMauXe());
        motorbikeMainDto.setSoKhung(mb.getSoKhung());
        motorbikeMainDto.setZinXe(mb.getZinXe());
        motorbikeMainDto.setMoTa(mb.getDescriptionXe());
        motorbikeMainDto.setTenLoaiXe(mb.getVehicleType().getTenLoaiXe());
        motorbikeMainDto.setAnhXe(mapAlbumsToImageUrls(mb.getAlbums()));
        return motorbikeMainDto;
    }
}
