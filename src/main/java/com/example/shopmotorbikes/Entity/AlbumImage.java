package com.example.shopmotorbikes.Entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@Table(name = "AlbumImage")
public class AlbumImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_anh")
    private Integer idAnh;

    @Column(name = "ma_xe_album")
    private String maXeAlbum;

    @Column(name = "anh_xe", length = 10485760)
    private String anhXe;



}

