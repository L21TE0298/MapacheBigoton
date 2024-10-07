import './css/Citas.css';
import imagenes from '../imagenes';
//importacion para la tabla


function ConsultarCitas() {

    const datos = [{
        id: 1,
        cliente: 'Juan Pérez',
        fecha: '2023-11-25 10:00',
        servicio: 'Corte de cabello',
        barbero: 'Carlos',
        estado: 'Confirmada'
    },
    {
        id: 1,
        cliente: 'Juan Pérez',
        fecha: '2023-11-25 10:00',
        servicio: 'Corte de cabello',
        barbero: 'Carlos',
        estado: 'Confirmada'
    },
        {
            id: 1,
            cliente: 'Juan Pérez',
            fecha: '2023-11-25 10:00',
            servicio: 'Corte de cabello',
            barbero: 'Carlos',
            estado: 'Confirmada'
        }]

    return (
    <div classname ="Contenido">
            <header className="App-header">
                <div>
                    <h1>Menu</h1>
                </div>
                <nav className="barra">
                    <a className="bo1" href="#">Sucursales</a>
                    <a className="bo1" href="#">contacto</a>
                </nav>
            </header>  
            <main className="cuerpo">
                <div className="menu">
                    <div className="melo">
                        <h2 className="menu1">Menu</h2>
                        <img className="logo" src={imagenes[4]} alt="as" />
                    </div>
                    <br></br>
                    <nav className='apartados'>
                        <a className="bo2" href="/registrar">registrar cita</a>
                        <br></br>
                        <a className="bo2" href="/consultas">Consultar citas</a>
                        <br></br>
                        <a className="bo2" href="/servicio">Nuevo servicio</a>
                        <br></br>
                        <a className="bo2" href="/barbero">Nuevo barbero</a>
                    </nav>
                </div>
                <div className="content">
                    <div className="content1">
                        <h2>Consulta de citas</h2>
                    </div>
                    <div className="botones">
                        {/* <a href="#"><button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M15 15h-6" />
                            <path d="M11.5 17.5l-2.5 -2.5l2.5 -2.5" />
                        </svg> exportar</button></a> */}
                        {/* <a href="#"><button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3" />
                        </svg> importar</button></a> */}
                        {/* <a href="#"><button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                        </svg> imprimir</button></a> */}
                        {/* <a href="#"><button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 6l8 0" />
                            <path d="M16 6l4 0" />
                            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 12l2 0" />
                            <path d="M10 12l10 0" />
                            <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 18l11 0" />
                            <path d="M19 18l1 0" />
                        </svg> filtro</button></a> */}
                        <a href="/#"><button className="btn"> <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M10 12h4v4h-4z" />
                        </svg> inicio</button></a>
                    </div>
                    <div className='tabla'>
                        <table className='tabla1'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Edad</th>
                                    <th>Ciudad</th>
                                    <th>País</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map((persona, index) => (
                                    <tr key={index}>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.edad}</td>
                                        <td>{persona.ciudad}</td>
                                        <td>{persona.país}</td>
                                        <td>{persona.correo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>   
                </div>
            </main>
            <footer className="foter">
                <div>
                    <h2>Redes sociales</h2>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>
                </div>
            </footer>
    </div>   
    );
}

export default ConsultarCitas;