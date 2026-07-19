import { Link } from 'react-router-dom';
import logo from '../assets/logo-mr-capman.png';

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Mr. CapMan" />
      </Link>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/#produtos">Produtos</Link>
      </nav>
    </header>
  );
}

export default Header;
