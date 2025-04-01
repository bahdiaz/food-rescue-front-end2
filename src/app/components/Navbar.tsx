import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#2D8C44] h-20 flex justify-between items-center px-6 text-white font-bold">
        <img src="/public/ChatGPT Image 1_04_2025, 20_37_53.png" alt="" />
        <nav>
          <ul className="flex gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cadastro">Cadastrar Alimento</Link></li>
            <li><Link to="/listagem">Lista de Alimentos</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
          </ul>
        </nav>
      </header>

  );
};

export default Navbar;
