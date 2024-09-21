package com.mapachebigoton.mapacheapi.model;
import jakarta.persistence.*;

@Entity
@Table(name = "barbero")
public class Barbero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;


    public Barbero(String nombre) {
        this.nombre = nombre;
    }

    public Barbero() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Barbero{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
