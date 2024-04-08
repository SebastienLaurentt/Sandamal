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
    <header className="absolute  z-10 w-full">
      <div className="flex items-center justify-between px-6 py-3 md:px-10 xl:mx-auto xl:max-w-screen-xl xl:px-16 text-white">
        <Link href="/">
          <Image src={logoWhite} alt="Logo Sandamal" />
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {navData.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-white font-extrabold"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-white transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="h-8 md:h-10 flex items-center lg:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}
