package com.mapachebigoton.mapacheapi.controller;

import com.mapachebigoton.mapacheapi.model.Cliente;
import com.mapachebigoton.mapacheapi.repository.ClienteRepository;
import com.fasterxml.jackson.databind.type.IterationType;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.Optional;


@RestController
@RequestMapping("/cliente")
public class clienteController {
    @Autowired
    ClienteRepository clienteRepository;

    @GetMapping()
    public ResponseEntity<Iterable<Cliente>> findAll() {
        return ResponseEntity.ok(clienteRepository.findAll());
    }

    @GetMapping("/{idCliente}")
    public ResponseEntity<Cliente> findById(@PathVariable Long idCliente) {
        Optional<Cliente> clienteOptional = clienteRepository.findById(idCliente);
        if (clienteOptional.isPresent()) {
            return ResponseEntity.ok(clienteOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody Cliente newCliente,UriComponentsBuilder ucb){
        Cliente savedCliente = clienteRepository.save(newCliente);
        URI uri = ucb
                .path("/cliente/{idCliente}")
                .buildAndExpand(savedCliente.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{idCliente}")
    public ResponseEntity<Void> update(@PathVariable Long idCliente, @RequestBody Cliente clienteAct){
        Cliente clienteAnt = clienteRepository.findById(idCliente).get();
        if (clienteAnt != null){
            clienteRepository.save(clienteAct);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{idCliente}")
    public ResponseEntity<Void> delete(@PathVariable Long idCliente) {
        if(clienteRepository.findById(idCliente).get() != null){
            clienteRepository.deleteById(idCliente);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}