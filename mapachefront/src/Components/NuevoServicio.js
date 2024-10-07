import './Estilos.css';
import menuImage from './Images/Menu.png';
import logoImage from './Images/logoCompleto-removebg-preview.png';
import cabelloCorteImage from './Images/Cabellos_cortes.jpg';
import barbaCorteImage from './Images/barbas-2.webp';
import facebookImage from './Images/facebook.png';
import instagramImage from './Images/logotipo-de-instagram.png';
import tiktokImage from './Images/tik-tok.png';

export default function NuevoServicio() {
    return (
        <div>
            <header className="headerServicios">
                <h2><img src={menuImage} alt="MENU" /> Menu</h2>
                <nav>
                    <a href="#">Sucursales</a>
                    <a href="#">Contacto</a>
                </nav>
            </header>

            <div id="menu">
                <h2> Menú <img src={logoImage} alt="Logo" /></h2>
                <ul>
                    <li><a href="./registrar">Registrar Cita</a></li>
                    <li><a>Consultar Citas</a></li>
                    <li><a>Nuevo Servicio</a></li>
                    <li><a>Nuevo Barbero</a></li>
                </ul>
            </div>

            <div className="Servicios">
                <div className="content">
                    <div className="logo-container2">
                        <img src={logoImage} alt="Logo Mapache Bigotón" className="logo" />
                        <h1>El Mapache Bigoton</h1>
                    </div>

                    <div className="service-section">
                        <div className="service">
                            <h3>Corte de Cabello</h3>
                            <img src={cabelloCorteImage} alt="Corte de Cabello" />
                            <p className="descripcion">Un corte tradicional con los lados y la parte trasera más cortos, dejando la parte superior un poco más larga.</p>
                            <div className="price">$110</div>
                        </div>
                        <div className="service">
                            <h3>Corte de Barba</h3>
                            <img src={barbaCorteImage} alt="Corte de Barba" />
                            <p className="descripcion">Una barba densa que cubre la mandíbula y mejillas. Ideal para un look robusto.</p>
                            <div className="price">$85</div>
                        </div>

                        <div className="form-containerServicios">
                            <h2 className="NewService">Nuevo Servicio</h2>
                            <input type="text" placeholder="Nombre del servicio" />
                            <textarea placeholder="Descripción"></textarea>
                            <input type="text" placeholder="Precio" />
                            <div className="buttons">
                                <button className="btnServicios registerServicios">Registrar Servicio</button>
                                <button type="button" className="btn view" onClick={() => window.location.href = '/#'}>Cancelar</button>
                            </div>
                        </div>
                    </div>

                    <p>Redes Sociales</p>
                    <div className="RedesSociales">
                        <img src={facebookImage} alt="Facebook" />
                        <img src={instagramImage} alt="Instagram" />
                        <img src={tiktokImage} alt="TikTok" />
                    </div>
                </div>
            </div>
        </div>
    );
}
