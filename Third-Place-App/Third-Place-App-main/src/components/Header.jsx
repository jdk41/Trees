import { Link } from 'react-router'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Trees logo" draggable={false} />
        <h1>Trees</h1>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Account</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default Header
