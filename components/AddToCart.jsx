"use client";

import { useEffect, useRef, useState } from "react";
import Magnetic from "@/components/Magnetic";
import { useCart } from "@/components/CartProvider";

const TALLAS = ["S", "M", "L", "XL"];

export default function AddToCart({ product }) {
  const { addItem } = useCart();
  const [talla, setTalla] = useState("M");
  const [added, setAdded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const add = () => {
    addItem(product, talla);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1600);
  };

  return (
    <>
      <div className="pd-sizes">
        <span className="pb-k">Tallaje · {talla}</span>
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

      <Magnetic>
        <button
          type="button"
          className={`btn pd-add ${added ? "is-added" : ""}`}
          onClick={add}
        >
          {added ? (
            <>AÑADIDO A LA BOLSA ✓</>
          ) : (
            <>
              AÑADIR A LA BOLSA <span className="arw">→</span>
            </>
          )}
        </button>
      </Magnetic>
    </>
  );
}
