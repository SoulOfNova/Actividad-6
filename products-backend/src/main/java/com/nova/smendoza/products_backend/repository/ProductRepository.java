package com.nova.smendoza.products_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nova.smendoza.products_backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
    
}
