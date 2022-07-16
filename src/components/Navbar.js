import { Link } from 'react-router-dom';
import user from '../assets/images/user.png';

const Navbar = () => (
  <nav className="navbar">
    <span className="logo"><h1>Bookstore CMS</h1></span>
    <ul className="navbar-nav">
      <li className="navbar-nav__items"><Link to="/">BOOKS</Link></li>
      <li className="navbar-nav__items"><Link to="/categories">CATEGORIES</Link></li>
    </ul>
    <div className="profile-icon">
      <img className="profile-icon-img" src={user} alt="profile" />
    </div>
  </nav>
);

export default Navbar;
