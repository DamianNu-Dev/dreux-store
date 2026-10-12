import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Arrivals() {
  const coleccion = products.slice(0, 5);

  return (
    <section className="arrivals" id="lanzamientos">
      <Reveal className="arrivals-head">
        <span className="label">PIEZAS SELECCIONADAS / NUEVOS LANZAMIENTOS</span>
        <span className="label label--dim">SS26 — {coleccion.length} PIEZAS</span>
      </Reveal>

      <div className="products">
        {coleccion.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="arrivals-foot" dir="right">
        <Link href="/tienda" className="link-arrow">
          VER TODO <span className="arw">→</span>
        </Link>
      </Reveal>
    </section>
  );
}