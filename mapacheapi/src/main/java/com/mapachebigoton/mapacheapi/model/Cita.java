package com.mapachebigoton.mapacheapi.model;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.*;

@Entity
//@Table(name = "cita")
public class Cita {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCita;

    private Date fecha;

    private Time hora;

    public Cita(Date fecha, Time hora) {
        this.fecha = fecha;
        this.hora = hora;
    }

    public Cita() {
    }

    public Integer getIdCita() {
        return idCita;
    }

    public void setIdCita(Integer idCita) {
        this.idCita = idCita;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    @Override
    public String toString() {
        return "Cita{" +
                "idCita=" + idCita +
                ", fecha=" + fecha +
                ", hora=" + hora +
                '}';
    }
    
}
