import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#2D8C44] h-[80px] flex items-center justify-between px-6">
      <div className="text-white font-bold text-2xl">FoodRescue</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cadastro" className="text-white">
              Cadastrar Alimento
            </Link>
          </li>
          <li>
            <Link to="/listagem" className="text-white">
              Lista de Alimentos
            </Link>
          </li>
          <li>
            <Link to="/perfil" className="text-white">
              Perfil
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
