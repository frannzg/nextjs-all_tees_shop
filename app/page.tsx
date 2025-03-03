import Image from "next/image";
import Carousel from "@/components/Carousel";

<script type="text/javascript" src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>

export default function Home() {
  return (
    <>
    {/* Carrusel arriba del todo y ocupando todo el ancho */}
    <div className="w-full h-[450px] overflow-hidden">
      <Carousel />
    </div>

    {/* Contenido principal */}
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}></h1>
      </main>
    </div>
  </>
  );
}
