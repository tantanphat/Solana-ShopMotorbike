package com.example.shopmotorbikes.Model.Dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class MotorbikeMainDto {
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
