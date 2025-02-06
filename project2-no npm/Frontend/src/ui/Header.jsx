import { Link } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <header className="mb-5 flex flex-col items-center justify-between md:flex-row md:justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
