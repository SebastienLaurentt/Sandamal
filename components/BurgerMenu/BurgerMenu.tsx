import { Instagram, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import navData from "../../data/navData";
import SandamalIcon from "../SandamalIcon/SandamalIcon";
interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  const pathname = usePathname();

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

  return (
    <>
      <button
        className="font-medium uppercase tracking-wider lg:text-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        Menu
      </button>

      <div
        className={`fixed left-0 top-0  flex min-h-screen w-full flex-col items-center bg-white pt-12 text-center text-black transition-all duration-500 ease-in-out  ${
          isOpen ? "opacity-100" : "hidden opacity-0"
        }`}
      >
        <Link href="/">
          <SandamalIcon fillColor="black" />
        </Link>

        <span className="my-3 text-[40px] xl:hidden xl:text-[30px]">
          <span className="mr-4">S</span>
          <span className="mr-4">A</span>
          <span className="mr-4">N</span>
          <span className="mr-4">D</span>
          <span className="mr-4">A</span>
          <span className="mr-4">M</span>
          <span className="mr-4">A</span>
          <span>L</span>
        </span>

        <button
          className=""
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        >
          <X />
        </button>

        <ul className="mt-16 flex flex-col gap-6 p-4 text-[19px] font-extralight tracking-[.5em] md:text-lg">
          {navData.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setIsOpen(false)}>
                {link.burgerMenuName}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="flex w-full justify-center px-8 py-12 md:px-10"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
        >
          <Instagram className="  size-8 md:size-10" />
        </button>
      </div>
    </>
  );
}
