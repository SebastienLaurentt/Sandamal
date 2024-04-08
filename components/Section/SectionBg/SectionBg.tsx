import { StaticImageData } from "next/image";

interface SectionProps {
  id?: string;
  className?: string;
  minHeightScreen: boolean;
  bg?: StaticImageData;
}

function SectionBg({
  id,
  className,
  minHeightScreen,
  bg,
}: SectionProps) {
  const isMinHeightScreen = minHeightScreen
    ? "min-h-screen"
    : "min-h-[calc(100vh/1.3)]";

  return (
    <section
      id={`${id}`}
      className={` ${className} ${isMinHeightScreen} relative w-full bg-cover bg-center px-6 md:px-10 xl:px-16`}
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${bg.src})`
          : "none",
      }}
    >
    </section>
  );
}

export default SectionBg;
