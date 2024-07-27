package com.example.shopmotorbikes.Model.Dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginDto {
    @NotEmpty(message="Email rỗng")
    private String email;
    @NotEmpty(message="Password rỗng")
    private String matKhau;
}
