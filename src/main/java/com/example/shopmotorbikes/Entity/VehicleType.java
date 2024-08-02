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
@Table(name = "VehicleType")
public class VehicleType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_loai_xe", updatable = false, nullable = false)
    private Integer maLoaiXe;

    @Column(name = "ten_loai_xe", nullable = false, unique = true)
    private String tenLoaiXe;

    @Column(name = "description_loai_xe", nullable = false)
    private String description;

}
