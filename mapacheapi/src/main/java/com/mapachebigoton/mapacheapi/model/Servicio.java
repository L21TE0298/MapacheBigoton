package com.mapachebigoton.mapacheapi.model;

import jakarta.persistence.*;

@Entity
//@Table(name = "servicio")
public class Servicio {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @Column(nullable = false, length = 100)
    private String descripcion;

    @Column(nullable = false)
    private Double costo;

    public Servicio(String descripcion, Double costo) {
        this.descripcion = descripcion;
        this.costo = costo;
    }

    public Servicio() {
    }

    public Integer getIdServicio() {
        return idServicio;
    }

    public void setIdServicio(Integer idServicio) {
        this.idServicio = idServicio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getCosto() {
        return costo;
    }

    public void setCosto(Double costo) {
        this.costo = costo;
    }

    @Override
    public String toString() {
        return "Servicio{" +
                "idServicio=" + idServicio +
                ", descripcion='" + descripcion + '\'' +
                ", costo=" + costo +
                '}';
    }
}
