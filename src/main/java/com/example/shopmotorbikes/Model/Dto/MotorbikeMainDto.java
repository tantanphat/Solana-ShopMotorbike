package com.example.shopmotorbikes.Model.Dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Data
@Getter
@Setter
public class MotorbikeMainDto {
    private String maXe;
    private String tenXe;
    private BigDecimal giaXe;
    private String dungTich;
    private String soKhung;
    private Integer zinXe;
    private String moTa;
    private String mauXe;
    private String trangThai;
    private List<String> anhXe;
    private String tenLoaiXe;
}
