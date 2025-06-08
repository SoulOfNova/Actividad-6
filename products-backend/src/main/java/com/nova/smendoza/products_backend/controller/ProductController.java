package com.nova.smendoza.products_backend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.nova.smendoza.products_backend.model.Product;
import com.nova.smendoza.products_backend.repository.ProductRepository;

import java.util.List;
import java.util.Map;


@RestController
public class ProductController { 

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/")
    public Map<String, Object> sayHello(){

        return Map.of("message", "Hello World!", "age", 15);
    }

    @GetMapping("api/products")
    public List<Product> getAllProducts(){

        return productRepository.findAll();
    }

    @PostMapping("api/products")
    public Product createProduct(@RequestBody Product product){

        var newProduct = productRepository.save(product);
        return newProduct;
    }
}
