"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const nav = document.querySelector(".nav");

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? scrollY / max : 0;
      if (bar) bar.style.transform = `scaleX(${p})`;
      if (nav) nav.classList.toggle("scrolled", scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (window.matchMedia("(pointer: coarse)").matches) return () => {};

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div id="progress-bar" className="progress" aria-hidden="true" />
    </>
  );
}