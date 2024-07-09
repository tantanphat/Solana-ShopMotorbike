    package com.example.shopmotorbikes.Model.Dto;

    import com.fasterxml.jackson.annotation.JsonInclude;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import lombok.NoArgsConstructor;
    import lombok.RequiredArgsConstructor;

    import java.math.BigDecimal;

    @Data
    @JsonInclude(JsonInclude.Include.NON_NULL)
    @RequiredArgsConstructor
    @AllArgsConstructor
    public class NhanVienDto {
        private String maNV;
        private String nameNV;
        private String genderNV;
        private String diaChi;
        private String phoneNV;
        private String emailNV;
        private BigDecimal tienLuong;
        private String avatar;
        private String matKhau;
        private Integer isStatus;
        private String maChucVu;

    }
