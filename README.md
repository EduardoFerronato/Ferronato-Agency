# Ferronato Agency — site (Next.js)

Versão do site institucional em **Next.js (App Router)**. Mesmo design e mesma
estrutura do `index.html` original — a diferença é que agora as imagens são
arquivos de verdade em `public/` e cada seção é um componente separado, o que
torna muito mais fácil trocar fotos e editar textos.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Onde mexer em cada coisa

| O quê                         | Arquivo                          |
| ----------------------------- | ------------------------------- |
| Estilos (CSS global do site)  | `app/globals.css`               |
| `<title>`, description, ícone | `app/layout.js`                 |
| Menu / topo                   | `components/Nav.js`             |
| Seção inicial (hero)          | `components/Hero.js`            |
| Serviços                      | `components/Services.js`        |
| Como trabalhamos              | `components/Process.js`         |
| Quem somos + foto             | `components/About.js`           |
| Contato / formulário          | `components/Contact.js`         |
| Rodapé                        | `components/Footer.js`          |
| Scripts de interface          | `components/SiteScripts.js`     |

## Trocar imagens

Basta substituir o arquivo dentro de `public/` mantendo o mesmo nome:

- `public/logo.png` — logo (usada no menu, no hero e no rodapé)
- `public/logo-mark.png` — ícone da aba do navegador (favicon)
- `public/amor.jpeg` — foto da seção "Quem somos"

Se quiser usar outro nome de arquivo, ajuste o `src` no componente
correspondente.

## Formulário de contato

Hoje o envio é só um placeholder (mostra uma mensagem e limpa o formulário).
Para receber de verdade, conecte o `onSubmit` em `components/SiteScripts.js` a um
serviço de e-mail (Formspree, Resend, EmailJS) ou a um link de WhatsApp.
