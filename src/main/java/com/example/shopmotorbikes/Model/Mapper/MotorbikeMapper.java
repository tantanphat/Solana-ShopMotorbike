package com.example.shopmotorbikes.Model.Mapper;

import com.example.shopmotorbikes.Entity.AlbumImage;
import com.example.shopmotorbikes.Entity.Motorbike;
import com.example.shopmotorbikes.Model.Dto.MotorbikeMainDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface MotorbikeMapper {
//    MotorbikeMapper INSTANCE = Mappers.getMapper(MotorbikeMapper.class);

    @Mapping(target = "anhXe",source = "albums",qualifiedByName = "mapNameImgMotorbike")
    MotorbikeMainDto motorbikeToMotorbikDto(Motorbike mb);

    //Map chỉ lấy tên ảnh trong ablum
    @Named("mapNameImgMotorbike")
    default List<String>  mapAlbumsToImageUrls(List<AlbumImage> albums) {
        return albums.stream()
                .map(AlbumImage::getAnhXe)
                .collect(Collectors.toList());
    }


}
