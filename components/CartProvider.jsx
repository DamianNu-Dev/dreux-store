"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const KEY = "dreux-cart";
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* storage full or unavailable */
    }
  }, [items, ready]);

  const addItem = useCallback((product, talla = "M") => {
    setItems((prev) => {
      const i = prev.findIndex(
        (x) => x.slug === product.slug && x.talla === talla
      );
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [
        ...prev,
        {
          slug: product.slug,
          nombre: product.nombre,
          precio: product.precio,
          imagen: product.imagen || null,
          talla,
          qty: 1,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((slug, talla) => {
    setItems((prev) =>
      prev.filter((x) => !(x.slug === slug && x.talla === talla))
    );
  }, []);

  const setQty = useCallback((slug, talla, qty) => {
    setItems((prev) =>
      prev.flatMap((x) => {
        if (x.slug !== slug || x.talla !== talla) return [x];
        if (qty <= 0) return [];
        return [{ ...x, qty: Math.min(99, qty) }];
      })
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((n, x) => n + x.qty, 0);
    const subtotal = items.reduce((n, x) => n + x.qty * x.precio, 0);
    return { items, addItem, removeItem, setQty, clear, count, subtotal, ready };
  }, [items, addItem, removeItem, setQty, clear, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
