package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hang_xe", updatable = false, nullable = false)
    private String maHangXe;

    @Column(name = "ten_hang", nullable = false, unique = true)
    private String tenHang;

    @Column(name = "logo_hang", nullable = false)
    private String logoHang;

    @Column(name = "description_hang", nullable = false)
    private String descriptionHang;

}

