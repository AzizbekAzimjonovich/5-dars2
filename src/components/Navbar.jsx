import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <h1 className="title">MyWebsite</h1>
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/Contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
