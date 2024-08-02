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
    private String trangThai; // Để hiển thị trạng thái dưới dạng chữ
    private Integer loaiXe; // Để lưu loại xe dưới dạng số
    private String hangXe; // Để lưu hãng xe dưới dạng chữ
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
        motorbike.setTrangThai(this.trangThai); // Sử dụng chuỗi cho trạng thái
        motorbike.setMaLoaiXe(this.loaiXe); // Sử dụng Integer cho loại xe
        motorbike.setMaHangXe(this.hangXe); // Sử dụng chuỗi cho hãng xe
        // Nếu bạn cần xử lý thêm phần lưu ảnh, hãy thêm logic vào đây
        return motorbike;
    }
}
