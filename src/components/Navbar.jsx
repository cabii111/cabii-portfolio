import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        CABII
      </div>

      <div className="nav-links">

        <a
  href="/#home"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Home
</a>

        

        <div className="dropdown">

  <button className="dropdown-btn">
    Works ▼
  </button>

  <div className="dropdown-content">


<a href="/#uiux">UI/UX</a>

<a href="/#graphics">Graphic Designs</a>

<a href="/#threed">3D Designs</a>


  </div>

  </div>


  <a
  href="/Cabii-Resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  Resume
</a>

</div>

<a href="#contact" className="talk-btn">
  Hire Me
</a>

</div>
  );
}

export default Navbar;