import "../assets/styles/NotFound.css";
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className="notFound text-center">
      <h1 className="text-white py-5">Jesse no está la página 👹</h1>
      <Link className="volver-inicio" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;