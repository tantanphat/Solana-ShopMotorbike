package com.example.shopmotorbikes.Repository;

import com.example.shopmotorbikes.Entity.Motorbike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Motorbike, String> {
}
