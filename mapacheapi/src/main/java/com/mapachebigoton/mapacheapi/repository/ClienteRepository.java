package com.mapachebigoton.mapacheapi.repository;

import org.springframework.stereotype.Repository;
import com.mapachebigoton.mapacheapi.model.Cliente;
import org.springframework.data.repository.CrudRepository;


@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
}
