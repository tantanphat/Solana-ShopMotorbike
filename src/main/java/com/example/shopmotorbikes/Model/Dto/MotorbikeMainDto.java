package com.example.shopmotorbikes.Model.Dto;

import com.example.shopmotorbikes.Entity.Motorbike;
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
    private Integer loaiXe;
    private String hangXe;
    private List<String> anhXe;

    public Motorbike toEntity() {
        Motorbike motorbike = new Motorbike();
        motorbike.setMaXe(this.maXe);
        motorbike.setTenXe(this.tenXe);
        motorbike.setGiaXe(this.giaXe);
        motorbike.setDungTich(this.dungTich);
        motorbike.setSoKhung(this.soKhung);
        motorbike.setZinXe(this.zinXe);
        motorbike.setDescriptionXe(this.moTa);
        motorbike.setMauXe(this.mauXe);
        motorbike.setTrangThai(this.trangThai);
        motorbike.setMaLoaiXe(this.loaiXe);
        motorbike.setMaHangXe(this.hangXe);
        return motorbike;
    }
}
