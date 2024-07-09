package com.example.shopmotorbikes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SolanaShopMotorbikeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SolanaShopMotorbikeApplication.class, args);
        System.out.println("Java 6 Application started");
        System.out.println("Version: " + System.getProperty("java.version"));
        System.out.println("Vendor: " + System.getProperty("java.vendor"));
        System.out.println("Java Runtime Environment: " + System.getProperty("java.runtime.name"));
    }

}
