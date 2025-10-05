import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
    useEffect(() => {
      // Se ejecuta solo al montar el componente
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
  const handleLogout = () => {
    localStorage.removeItem("user"); // borra el usuario
    setUser(null);                   // actualiza el estado
    navigate("/");                   // redirige al inicio
  };

  return (
    <header className="w-full z-50 bg-black shadow-md">
      <nav className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">NUKE GYM</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="bg-black hover:bg-gray-700 !text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Inicio
          </Link>

          <Link
            to="/plans"
            className="bg-black hover:bg-gray-700 !text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Membresías
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-black hover:bg-gray-700 !text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Iniciar sesión
              </Link>
              <Link
                to="/register"
                className="bg-black hover:bg-gray-700 !text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
