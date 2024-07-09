package com.example.shopmotorbikes.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "NhanVien")
public class NhanVien implements Serializable {
    @Id
    @Column(name = "ma_nv")
    private String maNV;

    @Column(name = "name_nv")
    private String nameNV;

    @Column(name = "gender_nv")
    private String genderNV;

    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "phone_nv")
    private String phoneNV;

    @Column(name = "email_nv")
    private String emailNV;

    @Column(name = "tien_luong")
    private BigDecimal tienLuong;

    @Column(name = "avatar", length = 10485760)
    private String avatar;

    @Column(name = "mat_khau")
    private String matKhau;

    @Column(name = "isStatus")
    private Integer isStatus;

    @Column(name = "ma_chuc_vu")
    private String maChucVu;

}

