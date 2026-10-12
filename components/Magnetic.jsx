"use client";

import { useRef } from "react";

export default function Magnetic({ children, strength = 0.3, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .55s cubic-bezier(.2,.8,.2,1)";
    el.style.transform = "";
    setTimeout(() => {
      el.style.transition = "";
    }, 500);
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}