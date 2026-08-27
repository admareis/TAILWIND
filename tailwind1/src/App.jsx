import Home from './componentes/Home'
import Header from './componentes/Header';
import Footer from './componentes/Footer.jsx'
import Veiculos from './componentes/Veiculos.jsx'
import Utilidades from './componentes/Utilidades.jsx';
import Comprar from './componentes/Comprar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/utilidades' element={<Utilidades />} />
        <Route path='/comprar' element={<Comprar />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;