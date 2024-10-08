package com.mapachebigoton.mapacheapi.repository;
import org.springframework.stereotype.Repository;
import com.mapachebigoton.mapacheapi.model.Cita;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface CitaRepository extends CrudRepository<Cita, Integer> {
    
}
