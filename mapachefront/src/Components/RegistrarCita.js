import './Estilos.css';
import barberPoleReverse from './Images/Palo de barberia al reves.png';
import barberPole from './Images/Palo de barberia.png';
import logoImage from './Images/logoCompleto-removebg-preview.png';

export default function RegistrarCita() {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="logo-container">
                        <img src={logoImage} alt="Logo Mapache Bigotón" className="logo" />
                        <h1>El Mapache Bigoton</h1>
                    </div>
                </div>

                <div className="form-wrapper">
                    <img src={barberPoleReverse} alt="Palo de barberia" className="barber-pole" />

                    <div className="form-container">
                        <h2>REGISTRAR CITA</h2>
                        <form>
                            <div className="input-group">
                                <label htmlFor="sucursal">Sucursal</label>
                                <select id="sucursal">
                                    <option value="" disabled selected hidden>Selecciona una opción</option>
                                    <option value="sucursal1">Sucursal 1</option>
                                    <option value="sucursal2">Sucursal 2</option>
                                    <option value="sucursal3">Sucursal 3</option>
                                    <option value="sucursal4">Sucursal 4</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="barbero">Barbero:</label>
                                <select id="barbero">
                                    <option value="" disabled selected hidden>Selecciona un barbero</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="cliente">Cliente:</label>
                                <input type="text" id="cliente" placeholder="Cliente" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="numero-cliente">Número del cliente:</label>
                                <input type="text" id="numero-cliente" placeholder="Número del cliente" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="servicio">Servicio:</label>
                                <input type="text" id="servicio" placeholder="Servicio" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="costo">Costo:</label>
                                <input type="text" id="costo" placeholder="Costo" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="fecha">Fecha de la cita:</label>
                                <input type="date" id="fecha" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="hora">Hora de la cita:</label>
                                <input type="time" id="hora" />
                            </div>
                            <div className="buttons">
                                <button type="submit" className="btn register">Registrar cita</button>
                                <a href='/consultas'><button type="button" className="btn view">Ver citas</button></a>
                                <a href='/#'><button type="button" className="btn view">Cancelar</button></a>
                            </div>
                        </form>
                    </div>

                    <img src={barberPole} alt="Barber Pole" className="barber-pole" />
                </div>
            </div>
        </div>
    );
}
