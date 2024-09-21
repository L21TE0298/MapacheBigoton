package com.mapachebigoton.mapacheapi.controller;

import com.mapachebigoton.mapacheapi.model.Barbero;
import com.mapachebigoton.mapacheapi.repository.BarberoRepository;
import com.fasterxml.jackson.databind.type.IterationType;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.Optional;


@RestController
@RequestMapping("/barbero")
public class barberoController {
    @Autowired
    BarberoRepository barberoRepository;

    @GetMapping()
    public ResponseEntity<Iterable<Barbero>> findAll() {
        return ResponseEntity.ok(barberoRepository.findAll());
    }

    @GetMapping("/{idBarbero}")
    public ResponseEntity<Barbero> findById(@PathVariable Long idBarbero) {
        Optional<Barbero> barberoOptional = barberoRepository.findById(idBarbero);
        if (barberoOptional.isPresent()) {
            return ResponseEntity.ok(barberoOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Barbero newBarbero,UriComponentsBuilder ucb){
        Barbero savedBarbero = barberoRepository.save(newBarbero);
        URI uri = ucb
                .path("/barbero/{idBarbero}")
                .buildAndExpand(savedBarbero.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{idBarbero}")
    public ResponseEntity<Void> update(@PathVariable Long idBarbero, @RequestBody Barbero barberoAct){
        Barbero barberoAnt = barberoRepository.findById(idBarbero).get();
        if (barberoAnt != null){
            barberoRepository.save(barberoAct);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idBarbero}")
    public ResponseEntity<Void> delete(@PathVariable Long idBarbero) {
        if(barberoRepository.findById(idBarbero).get() != null){
            barberoRepository.deleteById(idBarbero);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
