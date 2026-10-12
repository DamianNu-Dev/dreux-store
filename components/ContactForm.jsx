"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const EMPTY = { nombre: "", email: "", mensaje: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (error) setError("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setError("Completa todos los campos antes de enviar.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Revisa tu correo, no parece válido.");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <Reveal className="contact-form contact-success" dir="left">
        <span className="contact-success-k" aria-hidden="true">
          ✓
        </span>
        <p className="contact-success-t">MENSAJE ENVIADO</p>
        <p className="contact-success-d">
          Gracias, {form.nombre.trim().split(" ")[0]}. Te responderemos en menos
          de 24 horas.
        </p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setForm(EMPTY);
            setSent(false);
          }}
        >
          ENVIAR OTRO <span className="arw">→</span>
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal
      as="form"
      className="contact-form"
      dir="left"
      onSubmit={submit}
      noValidate
    >
      <label className={`field ${form.nombre ? "is-filled" : ""}`}>
        <span>Nombre</span>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={set("nombre")}
          autoComplete="name"
        />
      </label>

      <label className={`field ${form.email ? "is-filled" : ""}`}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="tucorreo@email.com"
          value={form.email}
          onChange={set("email")}
          autoComplete="email"
        />
      </label>

      <label className={`field ${form.mensaje ? "is-filled" : ""}`}>
        <span>Mensaje</span>
        <textarea
          name="mensaje"
          rows={5}
          placeholder="Cuéntanos qué necesitas"
          value={form.mensaje}
          onChange={set("mensaje")}
        />
      </label>

      <div className="contact-form-foot">
        <button type="submit" className="btn">
          ENVIAR MENSAJE <span className="arw">→</span>
        </button>
        {error && <span className="field-error">{error}</span>}
      </div>
    </Reveal>
  );
}
