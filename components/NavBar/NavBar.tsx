"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navData from "../../data/navData";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import  logo from "../../public/images/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute py-4">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
        {/* <Link href="/">
          <Image src={logo} alt="Logo Sandamal" />
        </Link> */}
        

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

        {/* <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div> */}

        <div className="h-8 md:h-10 flex items-center lg:hidden ">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

      </div>
    </header>
  );
}
