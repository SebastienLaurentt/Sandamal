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
      <div className=" flex flex-col lg:flex-row mt-20 lg:mt-0 items-center justify-between px-6 py-3 xl:py-9  xl:mx-auto xl:px-16  text-white">
        <Link href="/">
          <Image src={logoWhite} alt="Logo Sandamal" height={30} />
        </Link>

        <span className="text-[40px] xl:text-[30px] mx-auto my-4 xl:hidden">
          <span className="mr-6">S</span>
          <span className="mr-6">A</span>
          <span className="mr-6">N</span>
          <span className="mr-6">D</span>
          <span className="mr-6">A</span>
          <span className="mr-6">M</span>
          <span className="mr-6">A</span>
          <span>L</span>
        </span>

        <nav className="hidden gap-12 uppercase xl:font-extralight lg:flex 2xl:ml-16">
          {navData.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="hover:border-b-2 hover:border-white tracking-widest"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="hover:border-b-2 hover:border-white tracking-widest"
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
