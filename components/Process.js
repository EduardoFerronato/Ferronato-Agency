export default function Process() {
  return (
    <section id="processo" className="process">
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
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
            Como trabalhamos
          </div>
          <h2>Um processo, do diagnóstico ao crescimento.</h2>
        </div>

        <div className="process-grid reveal">
          <div className="process-step">
            <span className="step-num">01 — Diagnóstico</span>
            <h3>Entender antes de criar</h3>
            <p>
              Mapeamos seu negócio, seu público e a concorrência em Sinop e
              região antes de desenhar qualquer tela.
            </p>
          </div>
          <div className="process-step">
            <span className="step-num">02 — Criação</span>
            <h3>Site e estratégia juntos</h3>
            <p>
              Desenvolvemos o site e o plano de marketing lado a lado — nunca em
              etapas separadas.
            </p>
          </div>
          <div className="process-step">
            <span className="step-num">03 — Lançamento</span>
            <h3>No ar, com acompanhamento</h3>
            <p>
              Publicamos com métricas configuradas desde o primeiro dia, para
              medir o que importa.
            </p>
          </div>
          <div className="process-step">
            <span className="step-num">04 — Crescimento</span>
            <h3>Ajuste contínuo</h3>
            <p>
              Revisamos os números mês a mês e ajustamos a rota com base em
              dados, não em achismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
