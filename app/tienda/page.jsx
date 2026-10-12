import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Tienda — DREUX",
};

const FILTROS = ["TODO", "DENIM", "CARGO", "RELAXED"];

export default function Tienda() {
  return (
    <section className="page shop">
      <Reveal className="page-head" dir="none">
        <nav className="shop-bread" aria-label="Migajas">
          <Link href="/">INICIO</Link>
          <span>/</span>
          <span>TIENDA</span>
        </nav>
        <span className="label label--dim">
          {String(products.length).padStart(2, "0")} PIEZAS
        </span>
        <h1 className="page-title">PANTALONES</h1>
        <p className="page-note">
          Serie corta, denim pesado y cortes anchos. Piezas pensadas para caer
          bien y durar, sin temporada que las caduque.
        </p>
      </Reveal>

      <div className="shop-bar">
        <span>FILTRAR POR</span>
        <div className="shop-filters">
          {FILTROS.map((f, i) => (
            <a key={f} className={i === 0 ? "is-active" : ""} href="#">
              {f}
            </a>
          ))}
        </div>
      </div>

      <div className="products">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      <div className="shop-foot">
        <span>HECHO EN SERIES CORTAS</span>
        <Link href="/nosotros" className="shop-foot-link">
          CONOCE LA FILOSOFÍA <span className="arw">↗</span>
        </Link>
      </div>
    </section>
  );
}
