"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useCart } from "@/components/CartProvider";

export default function CartView() {
  const { items, setQty, removeItem, clear, subtotal, count, ready } = useCart();
  const [done, setDone] = useState(false);

  if (!ready) return null;

  if (items.length === 0) {
    return (
      <section className="page">
        <Reveal className="page-head" dir="none">
          <span className="label label--dim">BOLSA</span>
          <h1 className="page-title">TU BOLSA ESTÁ VACÍA</h1>
          <p className="page-note">Cuando añadas piezas, aparecerán aquí.</p>
          <Link href="/tienda" className="btn">
            SEGUIR COMPRANDO <span className="arw">→</span>
          </Link>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="page">
      <Reveal className="page-head" dir="none">
        <span className="label label--dim">BOLSA</span>
        <h1 className="page-title">
          TU BOLSA <span className="cart-count-pill">{count}</span>
        </h1>
        <p className="page-note">Revisa tus piezas antes de finalizar.</p>
      </Reveal>

      <div className="cart-layout">
        <Reveal className="cart-list" dir="left">
          {items.map((it) => (
            <div className="cart-row" key={`${it.slug}-${it.talla}`}>
              <Link
                href={`/tienda/${it.slug}`}
                className="cart-thumb"
                aria-label={it.nombre}
              >
                {it.imagen ? (
                  <img src={it.imagen} alt={it.nombre} />
                ) : (
                  <span />
                )}
              </Link>

              <div className="cart-meta">
                <div className="cart-top">
                  <Link href={`/tienda/${it.slug}`} className="cart-name">
                    {it.nombre}
                  </Link>
                  <button
                    type="button"
                    className="cart-x"
                    aria-label={`Quitar ${it.nombre}`}
                    onClick={() => removeItem(it.slug, it.talla)}
                  >
                    ×
                  </button>
                </div>

                <span className="cart-var">Talla {it.talla}</span>

                <div className="cart-bottom">
                  <div className="cart-qty">
                    <button
                      type="button"
                      aria-label="Menos"
                      onClick={() => setQty(it.slug, it.talla, it.qty - 1)}
                    >
                      −
                    </button>
                    <span>{it.qty}</span>
                    <button
                      type="button"
                      aria-label="Más"
                      onClick={() => setQty(it.slug, it.talla, it.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="cart-price">${it.precio * it.qty}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="cart-summary" dir="right" delay={100}>
          <span className="label label--dim">RESUMEN</span>
          <div className="cart-line">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="cart-line">
            <span>Envío</span>
            <span>Gratis</span>
          </div>
          <div className="cart-total">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>

          <button
            type="button"
            className="btn cart-checkout"
            onClick={() => setDone(true)}
          >
            FINALIZAR COMPRA <span className="arw">→</span>
          </button>
          {done && (
            <p className="cart-note">
              Demo — aquí conectarás tu pasarela de pago.
            </p>
          )}

          <div className="cart-summary-foot">
            <Link href="/tienda" className="link-arrow">
              SEGUIR COMPRANDO
            </Link>
            <button type="button" className="cart-clear" onClick={clear}>
              Vaciar bolsa
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
