import Navbar from "./Navbar";
import "../css/Header.css";
import dogwoodlogo from "../../public/dogwoodlogo.png"

function Header() {
  return (
    <header className="header" style={{ backgroundColor: "offwhite" }}>
      <div className="header-content">
        <Navbar />
        <h1 style={{ fontSize: "5em" }}>DOGWOOD COLLARS</h1>
        {/* <br />
        <img src={dogwoodlogo} alt="Dogwood Logo" /> */}
      </div>
    </header>
  );
}

export default Header;
