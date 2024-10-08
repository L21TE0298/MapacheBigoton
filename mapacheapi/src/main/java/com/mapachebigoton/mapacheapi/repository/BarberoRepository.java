package com.mapachebigoton.mapacheapi.repository;

import org.springframework.stereotype.Repository;
import com.mapachebigoton.mapacheapi.model.Barbero;
import org.springframework.data.repository.CrudRepository;


@Repository
public interface BarberoRepository extends CrudRepository<Barbero, Long> {
}
