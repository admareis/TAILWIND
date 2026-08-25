import Home from './componentes/Home'
import Header from './componentes/Header';
import Footer from './componentes/Footer.jsx'
import Veiculos from './componentes/Veiculos.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;