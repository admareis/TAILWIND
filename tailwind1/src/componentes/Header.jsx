import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-emerald-800 text-white py-4">
      <div className="flex items-center justify-center gap-4 px-4">
        <img src={logo} alt="logo da Stargreen" className="h-25 w-25 rounded-[60%] object-cover" />
        <h1 className="text-3xl font-serif text-gray-50">STARGREEN TECHNOLOGY</h1>
      </div>
      <nav className="mt-4 flex justify-center gap-6">
        <Link to="/veiculos" className="hover:text-emerald-200">Veículos</Link>
        <Link to="/domestic" className="hover:text-emerald-200">Utilidades domésticas</Link>
        <Link to="/veiculos" className="hover:text-emerald-200">Veículos</Link>
        
      </nav>
    </header>
  )
}

export default Header;