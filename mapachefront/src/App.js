<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrarCita from './Components/RegistrarCita';
import NuevoServicio from './Components/NuevoServicio';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/registrar" element={<RegistrarCita />} />
        <Route path="/servicio" element={<NuevoServicio />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio'
import ConsultarCitas from './Components/ConsultarCitas';
import Barbero from './Components/NuevoBarbero';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/consultas" element={<ConsultarCitas />} />
        <Route path="/barbero" element={<Barbero />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
>>>>>>> origin
