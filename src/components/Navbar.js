import logo from "../logo.svg"

const Navbar = () => {
    return (
        // Navegação Desktop
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container-fluid">


            {/* Toggle button */}
            <button 
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarRightAlignExample"
                aria-controls="navbarRightAlignExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
            </button>

        <div className="navbar-brand me-2">
        <a href="/App" className="navbar-toggler" id="navbar-brand-logo">
            <img
                src={logo}
                height="32"
                alt="Página inicial"
                loading="lazy"
            />
        </a>
        <a href="/App" className="collapse navbar-collapse" >
            <div className="fw-bold text-secondary">SaleStallion</div>
        </a>
        </div>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          {/* Left links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Início
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Client">
                Cliente
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Create">
                Create-deprecated
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Article01">
              HandleClick
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Article02">
              SetState
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Config">
              Configuração
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
