import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-6 z-50 py-15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">
          NUKE GYM
        </div>


        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300"><FaLinkedinIn /></a>
        </div>

        <div>
          <Link
            to="/dashboard"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Enviar feedback
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; 2025 NUKE GYM. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

