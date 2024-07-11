package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "KhachHang")
public class KhachHang implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ma_kh", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String maKh;

    @Column(name = "email_kh", nullable = false, unique = true, length = 100)
    private String emailKh;

    @Column(name = "mat_khau", length = 50)
    private String matKhau;

    @Column(name = "ten_kh", length = 100)
    private String tenKh;

    @Column(name = "gioi_tinh", length = 50)
    private String gioiTinh;

    @Column(name = "dia_chi", length = 500)
    private String diaChi;

    @Column(name = "phone_kh", nullable = false, unique = true, length = 10)
    private String phoneKh;

    @Column(name = "avatar_kh")
    private String avatarKh;
}
