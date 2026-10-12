import Reveal from "@/components/Reveal";
import SearchProducts from "@/components/SearchProducts";

export const metadata = {
  title: "Buscar — DREUX",
};

export default function Buscar() {
  return (
    <section className="page">
      <Reveal className="page-head" dir="none">
        <span className="label label--dim">BUSCAR</span>
        <h1 className="page-title">¿QUÉ BUSCAS?</h1>
      </Reveal>
      <SearchProducts />
    </section>
  );
}