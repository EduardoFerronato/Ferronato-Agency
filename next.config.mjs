/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Não expõe o header "X-Powered-By: Next.js"
  poweredByHeader: false,
  // Cabeçalhos de segurança (aplicados quando servido via `next start`).
  // Sem CSP para não quebrar as fontes do Google nem os scripts inline do Next.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
