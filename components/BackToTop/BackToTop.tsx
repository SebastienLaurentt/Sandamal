"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const BackToTop = () => {

  // Handle animation to scroll to top
  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <div className="flex flex-row justify-center p-8">
      <Button
        variant={"backToTop"}
        className="uppercase text-tertiary-foreground"
        onClick={scrollToTop}
        aria-label="Retourner en haut de la page"
      >
        Back To Top
      </Button>
    </div>
  );
};

export default BackToTop;
