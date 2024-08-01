package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Motorbikes")
public class Products {

    @Id
    @Column(name = "ma_xe")
    private String maXe; // Mã xe máy (khóa chính)

    @Column(name = "ten_xe", nullable = false)
    private String tenXe; // Tên xe máy

    @Column(name = "gia_xe", nullable = false)
    private BigDecimal giaXe; // Giá bán của xe máy (sửa kiểu dữ liệu)

    @Column(name = "dung_tich", nullable = false)
    private String dungTich; // Dung tích của xe

    @Column(name = "trang_thai", nullable = false)
    private String trangThai; // Trạng thái của xe

    @Column(name = "zin_xe", nullable = false)
    private int zinXe; // Độ zin của xe

    @Column(name = "description_xe", nullable = false)
    private String descriptionXe; // Miêu tả về xe

    @Column(name = "so_khung", nullable = false)
    private String soKhung; // Số khung xe

    @Column(name = "mau_xe", nullable = false)
    private String mauXe; // Màu của xe (sửa kiểu dữ liệu thành String)

    @Column(name = "ma_loai_xe", nullable = false)
    private int maLoaiXe; // Mã loại xe

    @Column(name = "ma_hang_xe", nullable = false)
    private String maHangXe; // Mã của hãng xe
}
