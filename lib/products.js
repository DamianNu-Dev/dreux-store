/**
 * Fuente única de datos de producto.
 *
 * Arquitectura: capa de datos separada del frontend.
 * En el futuro, este módulo se sustituye por una llamada a una API real
 * (backend) sin tocar `components/` ni `app/`.
 * `imagen` es la foto principal; `imagenHover` es la segunda foto que se
 * muestra al pasar el cursor (o al tocar en el móvil). Si no hay foto,
 * se usa el icono de `components/ProductIcons.jsx` (clave `icon`).
 */
export const products = [
  {
    slug: "pantalon-ancho-latch-front",
    nombre: "Pantalón Ancho Latch-Front",
    precio: 92,
    categoria: "Pantalones",
    descripcion:
      "Pierna ancha, cierre delantero pintado y denim crudo de 14 oz. Se ajusta a la vida, no al estante.",
    imagen: "/pantalon1derxu.png",
    imagenHover: "/modelopantalon2.jpg",
    destacado: true,
  },
  {
    slug: "pantalon-cargo-ancho",
    nombre: "Pantalón Cargo Ancho",
    precio: 78,
    categoria: "Pantalones",
    descripcion:
      "Bolsillos multiherramienta, pierna ancha y refuerzos en la entrepierna. Función primero.",
    imagen: "/pantalon2derxu.png",
    imagenHover: "/modelopantalon3.jpg",
    destacado: false,
  },
  {
    slug: "pantalon-denim-crudo",
    nombre: "Pantalón Denim Crudo",
    precio: 98,
    categoria: "Pantalones",
    descripcion:
      "Denim sin lavar de 15 oz, caída recta y costuras vistas. Envejece contigo.",
    imagen: "/pantalon3derxu.png",
    imagenHover: "/modelopantalon1.jpg",
    destacado: false,
  },
  {
    slug: "pantalon-relaxed-fit",
    nombre: "Pantalón Relaxed Fit",
    precio: 84,
    categoria: "Pantalones",
    descripcion:
      "Tiro alto, pierna relajada y algodón rizado. Un básico que no pasa de moda.",
    imagen: "/pantalon4derxu.png",
    imagenHover: "/modeloderxu.png",
    destacado: false,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
