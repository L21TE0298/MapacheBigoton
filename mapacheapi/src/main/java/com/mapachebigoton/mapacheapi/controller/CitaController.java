package com.mapachebigoton.mapacheapi.controller;

import com.mapachebigoton.mapacheapi.model.Cita;
import com.mapachebigoton.mapacheapi.repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/cita")
public class CitaController {

    @Autowired
    CitaRepository citaRepository;

    @GetMapping()
    public ResponseEntity<Iterable<Cita>> findAll() {
        return ResponseEntity.ok(citaRepository.findAll());
    }

    @GetMapping("/{idCita}")
    public ResponseEntity<Cita> findById(@PathVariable Integer idCita) {
        Optional<Cita> citaOptional = citaRepository.findById(idCita);
        if (citaOptional.isPresent()) {
            return ResponseEntity.ok(citaOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Cita newCita,UriComponentsBuilder ucb){
        Cita savedCita = citaRepository.save(newCita);
        URI uri = ucb
                .path("/cita/{idCita}")
                .buildAndExpand(savedCita.getIdCita())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
    
    @PutMapping("/{idCita}")
    public ResponseEntity<Void> update(@PathVariable Integer idCita, @RequestBody Cita citaAct){
        Cita citaAnt = citaRepository.findById(idCita).get();
        if (citaAnt != null){
            citaRepository.save(citaAct);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idCita}")
    public ResponseEntity<Void> delete(@PathVariable Integer idCita) {
        if(citaRepository.findById(idCita).get() != null){
            citaRepository.deleteById(idCita);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    
}
