"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function SearchProducts() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();

  const res = term
    ? products.filter((p) =>
        `${p.nombre} ${p.categoria}`.toLowerCase().includes(term)
      )
    : products;

  return (
    <>
      <div className="search-bar">
        <span className="search-ico" aria-hidden="true">
          Q
        </span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Busca sudaderas, pantalones, denim…"
          aria-label="Buscar productos"
          autoComplete="off"
        />
      </div>

      <p className="search-count">
        {res.length} {res.length === 1 ? "resultado" : "resultados"}
      </p>

      {res.length > 0 ? (
        <div className="products">
          {res.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="search-empty">
          Sin resultados para “{q}”. Prueba con “sudadera” o “denim”.
        </p>
      )}
    </>
  );
}