package com.stockmaster.stockmaster_backend.repository;

import com.stockmaster.stockmaster_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Product, Long> {

}
