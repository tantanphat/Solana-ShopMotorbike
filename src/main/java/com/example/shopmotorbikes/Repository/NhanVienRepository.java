package com.example.shopmotorbikes.Repository;

import com.example.shopmotorbikes.Entity.NhanVien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NhanVienRepository extends JpaRepository<NhanVien,Object> {

}
