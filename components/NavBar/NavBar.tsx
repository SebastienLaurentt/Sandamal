"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import navData from "../../data/navData";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SandamalIcon from "../SandamalIcon/SandamalIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const headerPosition =
    pathname === "/" || pathname.startsWith("/collab/") ? "absolute" : "";
  const headerBgColor =
    pathname === "/" || pathname.startsWith("/collab/") ? "" : "bg-black";
  const headerTextColor =
    pathname === "/" || pathname.startsWith("/collab/")
      ? "text-primary-foreground"
      : "text-primary-foreground";
  const logoColor =
    pathname === "/" || pathname.startsWith("/collab/") ? "white" : "white";

  useEffect(() => {
    if (pathname === "/") {
      gsap.fromTo(
        "#header",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.5 }
      );
    }
  }, [pathname]);

  return (
    <header
      id="header"
      className={`${headerPosition} ${headerBgColor} z-10 w-full`}
    >
      <div
        className={`flex flex-col items-center pb-8 pt-12  ${headerTextColor} xl:mx-auto xl:mt-0 xl:flex-row xl:justify-between xl:px-16 xl:py-6`}
      >
        <div className="flex flex-col items-center gap-x-6 xl:flex-row">
          <Link href="/">
            <SandamalIcon fillColor={logoColor} />
          </Link>

          <span className="my-3 text-3xl lg:text-6xl xl:my-0 xl:text-3xl">
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
          <ul className="gap-8 uppercase xl:flex xl:font-medium">
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
