package com.example.shopmotorbikes.Repository;

import com.example.shopmotorbikes.Entity.ChucVu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChucVuRepository extends JpaRepository<ChucVu,Object> {
}
