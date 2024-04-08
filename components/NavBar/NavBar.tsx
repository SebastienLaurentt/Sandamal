"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navData from "../../data/navData";
import logoWhite from "../../public/images/logoWhite.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute z-10 w-full">
      <div className="mt-12 flex flex-col items-center text-white xl:mx-auto xl:mt-0 xl:flex-row xl:justify-between xl:px-16 xl:py-9">
        <Link href="/">
          <Image src={logoWhite} alt="Logo Sandamal" height={30} />
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
