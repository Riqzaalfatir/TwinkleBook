import Image from "next/image";

const Foto = () => {
  return (
    <section className="relative w-full h-[577px] min-h-[577px] max-h-[577px] overflow-hidden z-20">
      <Image
        src="/images/Michael-Vannya/Foto/MichaelVannya.webp"
        alt="Michael & Vannya"
        fill
        className="object-cover"
      />
    </section>
  );
};

export default Foto;