export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">
            <span className="mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3L21 20H3L12 3Z"
                  stroke="#c19a5b"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            O que fazemos
          </div>
          <h2>Site e marketing não competem. Trabalham juntos.</h2>
          <p className="lede">
            Toda empresa precisa dos dois — não em silos separados, mas
            desenhados como uma coisa só, do primeiro rascunho à primeira venda.
          </p>
        </div>

        <div className="service-grid">
          <div className="service-col">
            <div className="col-label">Desenvolvimento</div>
            <ul className="service-list">
              <li>
                <span className="num">01</span> Sites institucionais
              </li>
              <li>
                <span className="num">02</span> Landing pages de alta conversão
              </li>
              <li>
                <span className="num">03</span> Lojas virtuais (e-commerce)
              </li>
              <li>
                <span className="num">04</span> Sistemas e aplicações sob medida
              </li>
              <li>
                <span className="num">05</span> Manutenção e performance
              </li>
            </ul>
          </div>

          <div className="divider-col reveal">
            <div className="glyph">
              <svg
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 4L40 40H6L23 4Z"
                  stroke="#c19a5b"
                  strokeWidth="1.4"
                />
                <path
                  d="M23 16L32 34H14L23 16Z"
                  stroke="#f3f2ee"
                  strokeWidth="1.4"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          <div className="service-col accent-col">
            <div className="col-label">Marketing digital</div>
            <ul className="service-list">
              <li>
                <span className="num">01</span> Gestão de redes sociais
              </li>
              <li>
                <span className="num">02</span> Tráfego pago (Google &amp; Meta
                Ads)
              </li>
              <li>
                <span className="num">03</span> SEO — otimização para buscas
              </li>
              <li>
                <span className="num">04</span> Identidade visual e branding
              </li>
              <li>
                <span className="num">05</span> Produção de conteúdo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
