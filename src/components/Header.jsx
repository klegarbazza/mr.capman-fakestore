import logo from '../assets/logo-mr-capman.png';

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} alt="Mr. CapMan" />
      </a>

      <nav>
        <a href="#produtos">Início</a>
        <a href="#produtos">Produtos</a>
      </nav>
    </header>
  );
}

export default Header;
