import "./globals.css";

export const metadata = {
  title: "Ferronato Agency — Desenvolvimento Web & Marketing Digital | Sinop-MT",
  description:
    "Ferronato Agency: desenvolvimento de sites e marketing digital em Sinop-MT. Site e estratégia trabalhando juntos.",
  openGraph: {
    title: "Ferronato Agency — Desenvolvimento Web & Marketing Digital",
    description:
      "Site e estratégia de marketing, desenhados juntos. Agência em Sinop, MT.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/logo-mark.png",
  },
};

export const viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
