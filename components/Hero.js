export default function Hero() {
  return (
    <section className="hero" id="top">
      <svg
        className="hero-geo"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c1c1f" />
            <stop offset="100%" stopColor="#0b0b0d" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#232326" />
            <stop offset="100%" stopColor="#101012" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="#0b0b0d" />
        <polygon points="760,0 1440,0 1440,900 420,900" fill="url(#g1)" />
        <polygon points="1180,0 1440,0 1440,560" fill="url(#g2)" />
        <line
          x1="760"
          y1="0"
          x2="420"
          y2="900"
          stroke="#c19a5b"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="1180"
          y1="0"
          x2="900"
          y2="900"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.05"
        />
      </svg>

      <div className="hero-inner">
        <div className="hero-logo reveal in">
          <img
            src="/logo.png"
            alt="Ferronato Agency — Desenvolvimento Web & Marketing Digital"
          />
        </div>
        <div className="hero-copy reveal in">
          <p>
            <strong>Desenvolvimento Web &amp; Marketing Digital</strong> — Sinop,
            MT.
            <br />
            Site sem estratégia não é visto. Estratégia sem um bom site não
            converte. Por isso, na Ferronato, as duas coisas nascem juntas:
            transformamos empresas em marcas modernas e profissionais.
          </p>
        </div>
        <div className="hero-actions reveal in">
          <a href="#contato" className="btn btn-solid">
            Solicitar orçamento
          </a>
          <a href="#servicos" className="btn btn-ghost">
            Ver serviços
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>ROLE</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
