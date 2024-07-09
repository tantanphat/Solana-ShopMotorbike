package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "Position")
public class ChucVu {

    @Id
    @Column(name = "ma_chuc_vu", nullable = false, updatable = false)
    private String maChucVu;

    @Column(name = "ten_chuc_vu", nullable = false)
    private String tenChucVu;

    @Column(name = "mieu_ta", nullable = true)
    private String mieuTa;

}