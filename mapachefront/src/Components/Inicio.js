import './css/inicio.css';
import imagenes from '../imagenes';

function Inicio() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Bienvendo</h1>
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
                        <a className="bo2" href="/Barbero">Nuevo barbero</a>
                    </nav>   
                </div>
                <div className="content">
                    <div className="content1">
                        <img className="logo" src={imagenes[4]} alt="as" />
                        <h2>El mapache bigoton</h2>
                    </div>
                    <img className="imgContent" src={imagenes[1]} alt="as" />
                    <img className="imgContent" src={imagenes[2]} alt="as" />
                    <img className="imgContent" src={imagenes[3]} alt="as" />
                    <br></br>
                    <a href="/registrar"><button className="btn">registrar citas</button></a>
                    <a href="/Barbero"><button className="btn">nuevo barbero</button></a>
                    <a href="/servicio"><button className="btn">nuevo servicio</button></a>
                    <a href="/consultas"><button className="btn">Consultar citas</button></a>
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

export default Inicio;

