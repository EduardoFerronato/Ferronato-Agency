"use client";

import { useEffect } from "react";

/**
 * Comportamentos de interface do site (mesma lógica do site original em HTML):
 *  - menu mobile (burger)
 *  - sombra do header ao rolar
 *  - link de navegação ativo conforme a seção visível
 *  - animação "reveal" ao rolar
 *  - envio do formulário de contato (placeholder, sem backend)
 *
 * Renderiza null — só liga os listeners depois que o HTML já está na tela.
 */
export default function SiteScripts() {
  useEffect(() => {
    const cleanups = [];

    // ---- menu mobile ----
    const burger = document.getElementById("burgerBtn");
    const navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      const onBurger = () => {
        const open = navLinks.classList.toggle("open");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
      };
      burger.addEventListener("click", onBurger);
      cleanups.push(() => burger.removeEventListener("click", onBurger));

      const linkEls = Array.from(document.querySelectorAll(".nav-link"));
      const onLinkClick = () => {
        navLinks.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      };
      linkEls.forEach((a) => a.addEventListener("click", onLinkClick));
      cleanups.push(() =>
        linkEls.forEach((a) => a.removeEventListener("click", onLinkClick))
      );
    }

    // ---- sombra do header ao rolar ----
    const headerEl = document.querySelector("header.nav");
    if (headerEl) {
      const onScroll = () => {
        headerEl.classList.toggle("scrolled", window.scrollY > 12);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // ---- link de navegação ativo ----
    const sections = document.querySelectorAll("main section[id], .hero#top");
    const navLinkEls = document.querySelectorAll(".nav-link");
    if (sections.length) {
      const navIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinkEls.forEach((a) => {
                const isActive = a.getAttribute("href") === "#" + id;
                a.classList.toggle("active", isActive);
                if (isActive) a.setAttribute("aria-current", "true");
                else a.removeAttribute("aria-current");
              });
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => navIo.observe(s));
      cleanups.push(() => navIo.disconnect());
    }

    // ---- animação reveal ao rolar ----
    const revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("in");
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // ---- formulário de contato (placeholder — sem backend configurado ainda) ----
    const form = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMsg");
    if (form && formMsg) {
      const onSubmit = (e) => {
        e.preventDefault();
        formMsg.textContent =
          "Mensagem pronta para envio — conecte este formulário a um e-mail ou WhatsApp para ativar o recebimento.";
        form.reset();
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
