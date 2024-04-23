"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  bg?: StaticImageData;
}

function SectionBg({ id, className, bg }: SectionProps) {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Vérifier la hauteur de l'écran et l'orientation
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      const height = window.innerHeight;

      // Si la hauteur est inférieure à une certaine valeur et en mode paysage,
      // définir isMinHeightScreen à true, sinon false
      setIsLandscape(isLandscape && height < 500);
    };

    // Ajouter un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener("resize", handleResize);

    // Appel initial pour définir correctement l'état au chargement de la page
    handleResize();

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id={id}
      className={`${className} ${
        isLandscape ? "h-[800px] " : "h-screen"
      } relative w-full bg-cover bg-center px-6 md:px-10 xl:px-16`}
      style={{
        backgroundImage: bg
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${bg.src})`
          : "none",
      }}
    ></section>
  );
}

export default SectionBg;
