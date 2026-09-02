export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="wrap">
        <div className="contact-intro reveal">
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
            Vamos conversar
          </div>
          <h2>
            Pronto para ter um site e uma estratégia que trabalham juntos?
          </h2>
          <p className="lede">
            Conte um pouco sobre sua empresa e retornamos com os próximos passos.
          </p>
        </div>

        <div className="contact-body">
          <div className="reveal">
            <form className="contact-form" id="contactForm">
              <div className="field">
                <label htmlFor="fname">Nome</label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="femail">E-mail</label>
                <input
                  type="email"
                  id="femail"
                  name="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="fmsg">Mensagem</label>
                <textarea
                  id="fmsg"
                  name="message"
                  rows="5"
                  placeholder="Conte um pouco sobre seu projeto..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-solid"
                style={{ alignSelf: "flex-start" }}
              >
                Enviar mensagem
              </button>
              <div className="form-msg" id="formMsg" role="status"></div>
            </form>
          </div>

          <div className="contact-details reveal">
            <div className="contact-block">
              <div className="label">Localização</div>
              <div className="value">Sinop — Mato Grosso, Brasil</div>
            </div>

            {/* TODO (Ferronato): assim que tiver telefone/WhatsApp, e-mail e redes
                sociais definitivos, preencha estes blocos — a estrutura já está pronta. */}
            <div className="contact-block">
              <div className="label">Telefone / WhatsApp</div>
              <div className="value muted">em breve</div>
            </div>
            <div className="contact-block">
              <div className="label">E-mail</div>
              <div className="value muted">em breve</div>
            </div>
            <div className="contact-block">
              <div className="label">Redes sociais</div>
              <div className="value muted">em breve</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
