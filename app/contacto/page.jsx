import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto — DREUX",
};

const INFO = [
  { k: "Email", v: "hola@dreux.store", href: "mailto:hola@dreux.store" },
  { k: "Ubicación", v: "Ciudad Quito, Ecuador", href: null },
  { k: "Envíos", v: "Todo Ecuador · 24/48h", href: null },
  { k: "Horario", v: "Lun–Vie · 10:00–19:00", href: null },
];

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export default function Contacto() {
  return (
    <section className="page">
      <Reveal className="page-head" dir="none">
        <span className="label label--dim">CONTACTO</span>
        <h1 className="page-title">HABLEMOS</h1>
        <p className="page-note">
          ¿Dudas con una talla o con tu pedido? Escríbenos y te respondemos en
          menos de 24 horas.
        </p>
      </Reveal>

      <div className="contact-grid">
        <ContactForm />

        <Reveal className="contact-aside" dir="right" delay={120}>
          {INFO.map((i) => (
            <div className="contact-block" key={i.k}>
              <span className="pb-k">{i.k}</span>
              {i.href ? <a href={i.href}>{i.v}</a> : <span>{i.v}</span>}
            </div>
          ))}
          <div className="contact-block">
            <span className="pb-k">Redes</span>
            <div className="contact-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label} <span className="arw">↗</span>
                </a>
              ))}
            </div>
          </div>
          <Link href="/tienda" className="link-arrow contact-back">
            IR A LA TIENDA <span className="arw">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}