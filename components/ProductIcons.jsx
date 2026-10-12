/** Iconos de las prendas (UI). Se mapean desde `lib/products.js` por clave. */

export function ZipHoodie() {
  return (
    <svg viewBox="0 0 120 120" className="garment" aria-hidden="true">
      <path
        className="g"
        d="M38 98V52c0-9 6-14 14-16l6-3 4 8h8l4-8 6 3c8 2 14 7 14 16v46z"
      />
      <path className="gd" d="M38 52 26 60l5 18 9-6M82 52l12 8-5 18-9-6" />
      <path className="gs" d="M60 82V98" stroke="#fff" />
    </svg>
  );
}

export function Tee() {
  return (
    <svg viewBox="0 0 120 120" className="garment" aria-hidden="true">
      <path
        className="g"
        d="M44 32 30 40 22 62l13 5 3-14v45h44V53l3 14 13-5-8-22-14-8c-5 7-24 7-30 0z"
      />
    </svg>
  );
}

export function WideJeans() {
  return (
    <svg viewBox="0 0 120 120" className="garment" aria-hidden="true">
      <path className="g" d="M34 28h52l-2 68H64L58 62 52 96H36z" />
      <path className="gs" d="M44 40h6M44 46h6" />
    </svg>
  );
}

export function Hoodie() {
  return (
    <svg viewBox="0 0 120 120" className="garment" aria-hidden="true">
      <path
        className="g"
        d="M36 42c-4-10 6-20 24-20s28 10 24 20c2 18 2 38 0 56H36c-2-18-2-38 0-56z"
      />
      <path className="gd" d="M36 42 24 50l6 20 10-6M84 42l12 8-6 20-10-6" />
      <path className="gs" d="M60 84v20" />
    </svg>
  );
}

export function CargoPants() {
  return (
    <svg viewBox="0 0 120 120" className="garment" aria-hidden="true">
      <path className="g" d="M28 30h64l4 68H60l-2-52-2 52H24z" />
      <path className="gs" d="M34 44h10v12H34zM76 44h10v12H76z" />
    </svg>
  );
}

export const ICONS = { ZipHoodie, Tee, WideJeans, Hoodie, CargoPants };