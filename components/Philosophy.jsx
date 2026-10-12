import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

const TITULAR =
  "CONSTRUIMOS PARA PERSONAS QUE YA SABEN QUIÉNES SON AHORA".split(" ");

export default function Philosophy() {
  return (
    <section className="philosophy" id="filosofia">
      <div className="grid-lines" aria-hidden="true" />

      <Reveal as="h2" className="philosophy-title" dir="none">
        {TITULAR.map((w, i) => (
          <span className="wa" key={i} style={{ "--d": `${i * 45}ms` }}>
            <span>{w}</span>{" "}
          </span>
        ))}
      </Reveal>

      <div className="philosophy-body">
        <Reveal className="philosophy-left">
          <span className="label">FILOSOFÍA</span>
          <Magnetic>
            <a href="#lanzamientos" className="btn btn--light">
              COMPRAR EL DROP <span className="arw">→</span>
            </a>
          </Magnetic>
        </Reveal>

        <Reveal dir="scale" className="philosophy-media">
          <img
            className="philosophy-model"
            src="/modelo-nosotros.png"
            alt="Modelo DREUX con pantalón ancho"
            draggable="false"
          />
        </Reveal>

        <Reveal className="philosophy-right" dir="left" delay={150}>
          <p className="vert">
            AUTENTICIDAD ANTE LA ESTÉTICA / FUNCIÓN SOBRE LA FORMA
          </p>
        </Reveal>
      </div>

      <div className="philosophy-bottom" id="contacto">
        <Reveal className="pb-cell">
          <span className="pb-k">Unidades</span>
          <span className="pb-v">&lt; 50 UNIDADES POR DROP</span>
        </Reveal>
        <Reveal className="pb-cell" delay={90}>
          <span className="pb-k">Material</span>
          <span className="pb-v">100% ALGODÓN / DENIM</span>
        </Reveal>
        <Reveal className="pb-cell" delay={180}>
          <span className="pb-k">Acabado</span>
          <span className="pb-v">COSTURAS TERMINADAS A MANO</span>
        </Reveal>
        <Reveal className="pb-cell pb-cell--wide" delay={270}>
          <span className="pb-k">Acerca de</span>
          <span className="pb-v pb-copy">
            DREUX es una firma formalista y silenciosa: sin logos ruidosos, sin
            ruido de temporada. Solo corte, peso e intención. Producción en
            series cortas, acabada a mano y liberada cuando está lista. Habla
            bajo.
          </span>
        </Reveal>
      </div>
    </section>
  );
}