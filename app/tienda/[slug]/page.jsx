import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import AddToCart from "@/components/AddToCart";
import { ICONS } from "@/components/ProductIcons";
import { products, getProductBySlug } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  return {
    title: p ? `${p.nombre} — DREUX` : "No encontrado — DREUX",
  };
}

export default async function Producto({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);

  if (!p) notFound();

  const Icon = ICONS[p.icon];

  return (
    <div className="pd">
      <nav className="shop-bread pd-bread" aria-label="Migajas">
        <Link href="/">INICIO</Link>
        <span>/</span>
        <Link href="/tienda">TIENDA</Link>
        <span>/</span>
        <span>{p.nombre}</span>
      </nav>

      <div className="pd-grid">
        <Reveal dir="scale" className="pd-media">
          {p.destacado && <span className="product-badge">TOP DROP</span>}
          {p.imagen ? (
            <img className="pd-img" src={p.imagen} alt={p.nombre} />
          ) : (
            Icon && <Icon />
          )}
        </Reveal>

        <div className="pd-info">
          <span className="label label--dim pd-cat">{p.categoria}</span>
          <Reveal as="h1" className="pd-name" dir="none">
            {p.nombre}
          </Reveal>
          <div className="pd-price">${p.precio}</div>
          <p className="pd-desc">{p.descripcion}</p>

          <AddToCart product={p} />

          <ul className="pd-notes">
            <li>&lt; 50 UNIDADES POR DROP</li>
            <li>100% ALGODÓN / DENIM</li>
            <li>ENVÍO MUNDIAL 24/48H</li>
          </ul>
        </div>
      </div>
    </div>
  );
}