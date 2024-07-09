package com.example.shopmotorbikes.Service.Impl;

import com.example.shopmotorbikes.Entity.ChucVu;
import com.example.shopmotorbikes.Repository.ChucVuRepository;
import com.example.shopmotorbikes.Service.ChucVuService;
import javassist.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ChucVuServiceImpl implements ChucVuService {
    @Autowired
    private ChucVuRepository repository;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public String auMaCV() {
        return jdbcTemplate.queryForObject("SELECT dbo.AUTO_ChucVu()", String.class);
    }

    @Override
    public void addChucVu(ChucVu chucVu) {
         repository.save(chucVu);
    }

    @Override
    public void deleteChucVu(String maCV) {
         if (repository.existsById(maCV)) {
             repository.deleteById(maCV);
         }
    }

    @Override
    public void updateChucVu(ChucVu chucVu) {
        if (repository.existsById(chucVu.getMaChucVu())) {
            repository.save(chucVu);
        }
    }

    @Override
    public List<ChucVu> getAllChucVu() {
        return repository.findAll();
    }

    @Override
    public ChucVu getChucVu(String maCV) throws NotFoundException {
        Optional<ChucVu> cv = repository.findById(maCV);
        return cv.orElseThrow(() -> new NotFoundException("Không tìm thấy mã chức vụ: " + maCV));
    }




}
