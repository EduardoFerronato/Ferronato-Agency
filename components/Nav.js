export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          {/* Logo — troque o arquivo em /public/logo.png */}
          <img src="/logo.png" alt="Ferronato Agency" />
          <span>FERRONATO AGENCY</span>
        </a>
        <nav className="links" id="navLinks">
          <a href="#top" className="nav-link">
            Início
          </a>
          <a href="#servicos" className="nav-link">
            Serviços
          </a>
          <a href="#processo" className="nav-link">
            Como trabalhamos
          </a>
          <a href="#sobre" className="nav-link">
            Sobre
          </a>
          <a href="#contato" className="nav-link">
            Contato
          </a>
          <a
            href="#contato"
            className="btn btn-solid"
            style={{ marginTop: "10px" }}
          >
            Solicitar orçamento
          </a>
        </nav>
        <button
          className="burger"
          id="burgerBtn"
          aria-label="Abrir menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
