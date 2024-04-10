"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../data/navData";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SandamalIcon from "../SandamalIcon/SandamalIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerPosition = pathname === "/" ? "absolute" : "";
  const headerTextColor =
    pathname === "/" ? "text-primary-foreground" : "text-foreground";
  const logoColor = pathname === "/" ? "white" : "black";

  return (
    <header className={`${headerPosition} z-10 w-full`}>
      <div
        className={`mt-12 flex flex-col items-center ${headerTextColor} xl:mx-auto xl:mt-0 xl:flex-row xl:justify-between xl:px-16 xl:py-6`}
      >
        <div className="flex flex-col items-center gap-x-6 xl:flex-row">
          <Link href="/">
            <SandamalIcon fillColor={logoColor} />
          </Link>

          <span className="my-3 text-[40px] lg:text-[64px] xl:my-0 xl:text-[40px]">
            <span className="mr-4 lg:mr-6 xl:mr-2">S</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">A</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">N</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">D</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">A</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">M</span>
            <span className="mr-4 lg:mr-6 xl:mr-2">A</span>
            <span>L</span>
          </span>
        </div>

        <nav className="hidden xl:block ">
          <ul className="gap-4 uppercase xl:flex xl:font-medium">
            {navData.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={
                    "hover:font-bold" + (pathname === link.href ? "" : "")
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center xl:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}
