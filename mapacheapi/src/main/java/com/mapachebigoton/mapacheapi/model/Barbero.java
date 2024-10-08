package com.mapachebigoton.mapacheapi.model;
import jakarta.persistence.*;

@Entity
@Table(name = "barbero")
public class Barbero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;


    public Barbero(String nombre) {
        this.nombre = nombre;
    }

    public Barbero() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
