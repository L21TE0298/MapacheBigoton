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