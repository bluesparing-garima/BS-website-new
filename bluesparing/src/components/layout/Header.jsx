import "../ui/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav className="nav">
          <div className="img">
            <NavLink to="/" className="pending">
              <img src="logo.webp" />
            </NavLink>
          </div>
          <div className="nav_items">
            <ul className="items">
              <li className="item">
                <NavLink to="/" className="pending">
                  HOME
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/about" className="pending">
                  ABOUT
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/services" className="pending">
                  SERVICES
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/contact" className="pending">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
