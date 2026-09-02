export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal">
            {/* Foto — troque o arquivo em /public/amor.jpeg */}
            <div className="about-photo">
              <img src="/amor.jpeg" alt="Eduardo e Anna Ferronato" />
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L21 20H3L12 3Z"
                    stroke="#8a6a34"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              Quem somos
            </div>
            <h2>
              Uma agência nascida em Sinop, para empresas que querem crescer de
              verdade.
            </h2>
            <p>
              A Ferronato Agency existe para resolver um problema comum: empresas
              que investem em marketing mas têm um site que não passa confiança,
              empresas que têm um site bonito mas invisível — e também aquelas
              que ainda nem têm um site.
            </p>
            <p>
              Trabalhamos desenvolvimento web e marketing digital como uma coisa
              só, com atendimento próximo e direto, pensado para o empreendedor
              de Sinop-MT e região que quer parecer — e ser — tão profissional
              online quanto é no dia a dia.
            </p>
            <div className="about-signoff">
              <div className="founder">
                <span className="founder-name">Eduardo Ferronato</span>
                <span className="founder-role">
                  Front-end Developer &amp; Fundador
                </span>
              </div>
              <div className="founder">
                <span className="founder-name">Anna Klassmann Ferronato</span>
                <span className="founder-role">Marketing &amp; Fundadora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
