package com.example.shopmotorbikes.Model.Dto;

import com.example.shopmotorbikes.Entity.KhachHang;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class KhachHangDto extends KhachHang {

    private String emailKh;
    private String tenKh;
    private String gioiTinh;
    private String diaChi;
    private String phoneKh;
    private String avatarKh;

}
