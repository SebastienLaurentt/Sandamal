import { Instagram, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import navData from "../../data/navData";
import SandamalIcon from "../SandamalIcon/SandamalIcon";
import { gsap } from "gsap";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  const xButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Désactiver le défilement de la page principale lorsque le menu est ouvert
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    // Nettoyage de l'effet
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        xButtonRef.current,
        { opacity: 0, rotation: 0 },
        { opacity: 1, rotation: 360, duration: 1, delay: 0.2 }
      );
    }
  }, [isOpen]);

  return (
    <>
      <button
        
        className="font-medium uppercase tracking-wider  lg:text-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        Menu
      </button>

      <div
        className={`fixed left-0 top-0  flex min-h-screen w-full flex-col justify-between bg-white pb-24 pt-12 text-center text-black transition-all duration-500 ease-in-out  ${
          isOpen ? "opacity-100" : "hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <SandamalIcon fillColor="black" />
          </Link>

          <span className="my-3 text-3xl lg:text-6xl xl:hidden xl:text-xl">
            <span className="mr-4 lg:mr-6">S</span>
            <span className="mr-4 lg:mr-6">A</span>
            <span className="mr-4 lg:mr-6">N</span>
            <span className="mr-4 lg:mr-6">D</span>
            <span className="mr-4 lg:mr-6">A</span>
            <span className="mr-4 lg:mr-6">M</span>
            <span className="mr-4 lg:mr-6">A</span>
            <span>L</span>
          </span>

          <button
            ref={xButtonRef}
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu mobile"
          >
            <X className="lg:size-10" />
          </button>
        </div>

        <ul className=" flex flex-col gap-4 p-4 text-md font-extralight tracking-[.5em] md:text-lg lg:gap-8 lg:text-xl">
          {navData.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.burgerMenuName}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className=" flex w-full justify-center"
          onClick={() => setIsOpen(false)}
          aria-label="Allez à la page Instagram de Sandamal"
        >
          <Link href="https://www.instagram.com/sandamalju" target="_blank">
            <Instagram className="  size-8 md:size-10 lg:size-12" />
          </Link>
        </button>
      </div>
    </>
  );
}
