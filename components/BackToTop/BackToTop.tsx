"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const BackToTop = () => {
  const pathname = usePathname();

  const backToTopVisibility = pathname === "/" ? "hidden" : "";

  // Handle animation to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${backToTopVisibility} flex flex-row justify-center py-8`}>
      <Button
        variant={"backToTop"}
        onClick={scrollToTop}
        aria-label="Retourner en haut de la page"
      >
        Back To Top
      </Button>
    </div>
  );
};

export default BackToTop;
