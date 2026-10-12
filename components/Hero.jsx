import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-bg">
        <img
          src="/modeloderxu@2x.png"
          alt="DREUX"
          draggable="false"
        />
      </div>

      <div className="hero-logo">
        <img
          src="/logodre1.png"
          alt="DREUX"
          draggable="false"
          width={513}
          height={486}
        />
      </div>

      <div className="hero-block">
        <h1 className="hero-tagline">
          NO HACEMOS RUIDO,
          <br />
          HACEMOS PRENDAS.
        </h1>
        <p className="hero-sub">
          Streetwear de autor en series cortas. Algodón pesado, denim crudo y
          cortes que no siguen la temporada.
        </p>
        <Magnetic>
          <a href="/tienda" className="btn btn-cta">
            ACCEDER A LA TIENDA
          </a>
        </Magnetic>
      </div>

      <div className="hero-footerline">
        <div className="hero-kicker">
          DROP 001 <span>/</span> SOMBRA <span>/</span> SS26
        </div>
        <div className="hero-meta">
          <a href="/tienda">TIENDA</a>
          <a href="/nosotros">AYUDA</a>
          <a href="/contacto">CONTACTO</a>
        </div>
        <div className="hero-year">© 2026 DREUX</div>
      </div>
    </section>
  );
}