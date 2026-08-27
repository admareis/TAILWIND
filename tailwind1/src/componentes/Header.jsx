/*import logo from '../assets/logo.png';
import logo1 from '../assets/energia-limpa.png' */  // não consegui importar as imagens de outra forma
import logo2 from '../assets/energia-limpa1.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-emerald-800 text-white py-4 text-1xl">
      <div className="flex items-center justify-center gap-4 px-4">
        <img src={logo2} alt="logo da Stargreen" className="h-25 w-25 rounded-[60%] object-cover" />
        <h1 className="text-3xl font-serif text-gray-50">STARGREEN TECHNOLOGY</h1>
      </div>
      <nav className="mt-4 flex justify-center gap-6">
        <Link to="/veiculos" className="hover:text-emerald-300">Mobilidade</Link>
        <Link to="/utilidades" className="hover:text-emerald-300">Utilidades domésticas</Link>
        <Link to="/comprar" className="hover:text-emerald-300">Saiba como adquirir</Link>        
      </nav>
    </header>
  )
}

export default Header;