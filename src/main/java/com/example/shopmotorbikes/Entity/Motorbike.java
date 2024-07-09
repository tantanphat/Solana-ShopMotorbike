package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Motorbikes")
public class Motorbike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_xe", updatable = false, nullable = false)
    private String maXe;

    @Column(name = "ten_xe", nullable = false, unique = true)
    private String tenXe;

    @Column(name = "gia_xe", nullable = false)
    private BigDecimal giaXe;

    @Column(name = "dung_tich", nullable = false)
    private String dungTich;

    @Column(name = "trang_thai", nullable = false)
    private String trangThai;

    @Column(name = "zin_xe", nullable = false)
    private Integer zinXe;

    @Column(name = "description_xe", nullable = false)
    private String descriptionXe;

    @Column(name = "so_khung", nullable = false, unique = true)
    private String soKhung;

    @Column(name = "mau_xe", nullable = false)
    private String mauXe;

    @Column(name = "ma_loai_xe", nullable = false)
    private Integer maLoaiXe;

    @Column(name = "ma_hang_xe", nullable = false)
    private String maHangXe;

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "ma_xe_album",referencedColumnName = "ma_xe")
    private List<AlbumImage> albums;

    @ManyToOne
    @JoinColumn(name = "ma_loai_xe", referencedColumnName = "ma_loai_xe", insertable = false, updatable = false)
    private VehicleType vehicleType;

}
