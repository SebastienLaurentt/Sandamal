"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Handle animation to scroll to top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <Button
      className={`fixed bottom-6 right-6 rounded-xl outline-none transition-opacity duration-200 md:right-10 xl:right-16   ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      aria-label="Retourner en haut de la page"
    >
      <ChevronUp />
    </Button>
  );
};

export default ScrollToTopButton;
