import '../App.css'

export default function RegistrarCita() {
    return (
        <div>
            <div class="container">
                <div class="header">

                    <h1>El mapache bigoton</h1>
                </div>

                <div class="form-wrapper">
                    <img src="./Images/Palo de barberia al reves.png" alt="Palo de barberia" class="barber-pole"/>

                        <div class="form-container">
                            <h2>REGISTRAR CITA</h2>
                            <form>
                                <div class="input-group">
                                    <label for="barbero">Barbero:</label>
                                    <input type="text" id="barbero" placeholder="Barbero"/>
                                </div>
                                <div class="input-group">
                                    <label for="cliente">Cliente:</label>
                                    <input type="text" id="cliente" placeholder="Cliente"/>
                                </div>
                                <div class="input-group">
                                    <label for="numero-cliente">Número del cliente:</label>
                                    <input type="text" id="numero-cliente" placeholder="Número del cliente"/>
                                </div>
                                <div class="input-group">
                                    <label for="servicio">Servicio:</label>
                                    <input type="text" id="servicio" placeholder="Servicio"/>
                                </div>
                                <div class="input-group">
                                    <label for="costo">Costo:</label>
                                    <input type="text" id="costo" placeholder="Costo"/>
                                </div>
                                <div class="input-group">
                                    <label for="fecha">Fecha de la cita:</label>
                                    <input type="date" id="fecha"/>
                                </div>
                                <div class="input-group">
                                    <label for="hora">Hora de la cita:</label>
                                    <input type="time" id="hora"/>
                                </div>
                                <div class="buttons">
                                    <button type="submit" class="btn register">Registrar cita</button>
                                    <button type="button" class="btn view">Ver citas</button>
                                </div>
                            </form>
                        </div>

                        <img src="./Images/Palo de barberia.png" alt="Barber Pole" class="barber-pole"/>

                        </div>
                </div>
            </div>

            )
}
