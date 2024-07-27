package com.example.shopmotorbikes.Repository;

import com.example.shopmotorbikes.Entity.KhachHang;
import com.example.shopmotorbikes.Model.Dto.LoginDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KhachHangRepository extends JpaRepository<KhachHang, String> {

    @Query(value = "select k from KhachHang k where k.emailKh = ?1",nativeQuery = false)
    KhachHang findByEmail(String email);
}
