"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ICONS } from "@/components/ProductIcons";
import { useCart } from "@/components/CartProvider";

const TALLAS = ["S", "M", "L", "XL"];

/**
 * Tarjeta de producto (UI).
 * - Escritorio: al pasar el cursor cambia a `imagenHover` (la modelo).
 * - Móvil: al tocar la foto alterna entre prenda y modelo.
 * - El botón AÑADIR abre la vista rápida (con selector de talla); el nombre también.
 */
export default function ProductCard({ product }) {
  const Icon = ICONS[product.icon];
  const { addItem } = useCart();
  const [open, setOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [touch, setTouch] = useState(false);
  const [talla, setTalla] = useState("M");

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const add = (t) => {
    addItem(product, t);
  };

  const handleCard = () => {
    if (touch) setShowModel((v) => !v);
    else setOpen(true);
  };

  return (
    <>
      <div
        className={`product ${product.destacado ? "featured" : ""} ${
          showModel ? "is-model" : ""
        }`}
        role="button"
        tabIndex={0}
        aria-label={`Ver ${product.nombre}`}
        onClick={handleCard}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="product-media">
          {product.destacado && (
            <span className="product-badge">TOP DROP</span>
          )}
          {product.imagen ? (
            <>
              <img
                className="product-img product-img--base"
                src={product.imagen}
                alt={product.nombre}
                draggable="false"
              />
              {product.imagenHover && (
                <img
                  className="product-img product-img--hover"
                  src={product.imagenHover}
                  alt={`${product.nombre} puesto`}
                  draggable="false"
                />
              )}
            </>
          ) : (
            Icon && <Icon />
          )}
          <div className="product-hover">
            <span className="quick-add">VER PIEZA</span>
          </div>
        </div>

        <div
          className="product-info"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <span className="p-name">{product.nombre}</span>
          <span className="p-price">${product.precio}</span>
        </div>

        <button
          type="button"
          className="p-add"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <span>AÑADIR A LA BOLSA</span>
          <span className="p-add-ico" aria-hidden="true">+</span>
        </button>
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="qv-overlay" onClick={() => setOpen(false)}>
            <div
              className="qv"
              role="dialog"
              aria-modal="true"
              aria-label={product.nombre}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="qv-close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                ×
              </button>

              <div className="qv-media">
                {product.imagen ? (
                  <img src={product.imagen} alt={product.nombre} />
                ) : (
                  Icon && <Icon />
                )}
              </div>

              <div className="qv-info">
                <span className="label label--dim">{product.categoria}</span>
                <h2 className="qv-name">{product.nombre}</h2>
                <div className="qv-price">${product.precio}</div>
                <p className="qv-desc">{product.descripcion}</p>

                <div className="pd-sizes">
                  <span className="pb-k">Tallaje</span>
                  <div className="pd-size-row">
                    {TALLAS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`pd-size ${t === talla ? "on" : ""}`}
                        onClick={() => setTalla(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="qv-actions">
                  <button
                    type="button"
                    className={`btn pd-add ${added ? "is-added" : ""}`}
                    onClick={() => add(talla)}
                  >
                    {added ? "AÑADIDO ✓" : "AÑADIR A LA BOLSA"}
                  </button>
                  <Link
                    href={`/tienda/${product.slug}`}
                    className="qv-more"
                    onClick={() => setOpen(false)}
                  >
                    VER DETALLE <span className="arw">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
