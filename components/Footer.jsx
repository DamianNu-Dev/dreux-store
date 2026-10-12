import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="foot-top">
        <div className="foot-brand">
          <Link href="/" className="foot-wordmark">
            DREUX
          </Link>
          <p>
            Streetwear de autor en series cortas. Algodón pesado, denim crudo y
            cortes que no siguen la temporada.
          </p>
          <a
            href="https://instagram.com"
            className="foot-social-cta"
            target="_blank"
            rel="noreferrer"
          >
            SÍGUENOS EN INSTAGRAM <span className="arw">↗</span>
          </a>
        </div>

        <div className="foot-links">
          <div className="foot-col">
            <h3>TIENDA</h3>
            <Link href="/tienda">Nueva colección</Link>
            <Link href="/tienda">Sudaderas</Link>
            <Link href="/tienda">Pantalones</Link>
            <Link href="/tienda">Camisetas</Link>
          </div>
          <div className="foot-col">
            <h3>AYUDA</h3>
            <Link href="/contacto">Envíos</Link>
            <Link href="/contacto">Devoluciones</Link>
            <Link href="/contacto">Guía de tallas</Link>
            <Link href="/contacto">Preguntas frecuentes</Link>
          </div>
          <div className="foot-col">
            <h3>CONTACTO</h3>
            <a href="mailto:hola@dreux.store">hola@dreux.store</a>
            <a href="tel:+34900000000">+34 900 000 000</a>
            <span className="foot-addr">Madrid · Ciudad de México</span>
          </div>
          <div className="foot-col">
            <h3>REDES</h3>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram <span className="arw">↗</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok <span className="arw">↗</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X / Twitter <span className="arw">↗</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube <span className="arw">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="foot-bottom">
        <span>© 2026 DREUX — Todos los derechos reservados</span>
        <div className="foot-legal">
          <Link href="/contacto">Privacidad</Link>
          <Link href="/contacto">Términos</Link>
          <Link href="/contacto">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}