package com.example.shopmotorbikes.Model.Response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginRespone {
    private String username;
    private String accessToken;
}
