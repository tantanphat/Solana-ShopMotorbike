package com.example.shopmotorbikes.Repository;

import com.example.shopmotorbikes.Entity.Motorbike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MotorbikeRepository extends JpaRepository<Motorbike,Object> {
    @Query("SELECT m FROM Motorbike m WHERE m.tenXe = ?1")
    Optional<Motorbike> findByName(String tenXe);
}
