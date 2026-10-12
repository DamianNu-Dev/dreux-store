"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";

const LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/tienda", label: "TIENDA" },
  { href: "/nosotros", label: "NOSOTROS" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Nav() {
  const path = usePathname();
  const { count } = useCart();
  const [menu, setMenu] = useState(false);

  const ACTIONS = [
    { href: "/buscar", label: "BUSCAR" },
    { href: "/bolsa", label: `BOLSA (${count})` },
  ];

  const isActive = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);

  useEffect(() => {
    setMenu(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          DREUX
        </Link>

        <nav className="nav-links" aria-label="Principal">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${isActive(l.href) ? "is-active" : ""}`}
            >
              <span className="nav-link-inner">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          {ACTIONS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className={`nav-link nav-link--icon ${
                isActive(a.href) ? "is-active" : ""
              }`}
            >
              <span className="nav-link-inner">{a.label}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={`nav-burger ${menu ? "is-open" : ""}`}
          aria-label="Menú"
          aria-expanded={menu}
          onClick={() => setMenu((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {menu && (
        <div className="nav-mobile" onClick={() => setMenu(false)}>
          <nav className="nav-mobile-inner" aria-label="Principal móvil">
            {[...LINKS, ...ACTIONS].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-mobile-link ${
                  isActive(l.href) ? "is-active" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
