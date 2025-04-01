import Navbar from "./Navbar"; 
import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Navbar />
        <h1 style={{ fontSize: '5em' }}> 
      DOGWOOD COLLARS
    </h1>
      </div>
    </header>
  );
}

export default Header;
