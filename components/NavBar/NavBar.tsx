"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../data/navData";
import logoBlack from "../../public/images/logoBlack.svg";
import logoWhite from "../../public/images/logoWhite.svg";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SandamalIcon from "../SandamalIcon/SandamalIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerPosition = pathname === "/" ? "absolute" : "";
  const headerTextColor =
    pathname === "/" ? "text-primary-foreground" : "text-foreground";
  const logoColor = pathname === "/" ? logoWhite : logoBlack;

  return (
    <header className={`${headerPosition} z-10 w-full`}>
      <div
        className={`mt-12 flex flex-col items-center ${headerTextColor} xl:mx-auto xl:mt-0 xl:flex-row xl:justify-between xl:px-16 xl:py-9`}
      >
        <Link href="/">
          <SandamalIcon fillColor={logoColor} />
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

        <nav className="hidden xl:block ">
          <ul className="gap-12 uppercase xl:flex xl:font-extralight">
            {navData.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={"" + (pathname === link.href ? "" : "")}
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
