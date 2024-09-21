import './CSS/Estilos.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrarCita from './RegistrarCita';
export default function NuevoServicio() {
    return(
        <div>
             <header class="headerServicios">
        <img src="./Images/Menu.png" alt="MENU"/>
        <nav>
            Sucursales 
            Contacto
        </nav>
    </header>
    
    <div id="menu">
        <h2><img src="./Images/logoCompleto-removebg-preview.png" alt="Logo"/> Menú</h2>
        <ul>
            <li>Registrar Cita</li>
            <li>Consultar Citas</li>
            <li>Nuevo Servicio</li>
            <li>Nuevo Barbero</li>
        </ul>
       
    </div>
    
    <div class="content">
        <div class="logo-container">
            <img src="./Images/logoCompleto-removebg-preview.png" alt="Logo Mapache Bigotón" class="logo"/>
            <h1>El Mapache Bigoton</h1>
        </div>

        <div class="service-section">
            <div class="service">
                <h3>Corte de Cabello</h3>
                <img src="./Images/Cabellos_cortes.jpg" alt="Corte de Cabello"/>
                <p class="descripcion">Un corte tradicional con los lados y la parte trasera más cortos, dejando la parte superior un poco más larga.</p>
                <div class="price">$110</div>
            </div>
            <div class="service">
                <h3>Corte de Barba</h3>
                <img src="./Images/barbas-2.webp" alt="Corte de Barba"/>
                <p class="descripcion">Una barba densa que cubre la mandíbula y mejillas. Ideal para un look robusto.</p>
                <div class="price">$85</div>
            </div>
            <div class="form-containerServicios">
                <h2 class="NewService">Nuevo Servicio</h2>
                <input type="text" placeholder="Nombre del servicio"/>
                <textarea placeholder="Descripción"></textarea>
                <input type="text" placeholder="Precio"/>
                <div class="buttons">
                    <button class="btnServicios registerServicios">Registrar Servicio</button>
                    <button class="btnServicios cancelServicios">Cancelar</button>
                </div>
            </div>
            
        </div>
        <p>Redes Sociales</p>
        <div class="RedesSociales">
            <img src="./Images/facebook.png" alt="Facebook"/> 
            <img src="./Images/logotipo-de-instagram.png" alt="Instagram"/>
            <img src="./Images/tik-tok.png" alt="TikTok"/>
        </div>
    </div>
        </div>
    )
}
