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
