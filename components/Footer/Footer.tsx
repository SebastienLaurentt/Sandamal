"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { gsap } from "gsap";

const Footer = () => {
  const pathname = usePathname();

  const footerPosition = pathname === "/" ? "absolute bottom-0" : "";
  const textColor =
    pathname === "/" ? "text-secondary-foreground" : "text-foreground";
  const emailButtonBorderColor =
    pathname === "/" ? "border-white" : "border-black";
  const emailPlaceholderTextColor =
    pathname === "/"
      ? "placeholder:text-secondary-foreground"
      : "placeholder:text-foreground";
  const followMeTextColor =
    pathname === "/" ? "text-foreground" : "text-secondary-foreground";
  const followMeBgColor = pathname === "/" ? "bg-background" : "bg-primary";
  const followMeHover =
    pathname === "/"
      ? "xl:hover:bg-transparent xl:hover:text-white"
      : "xl:hover:bg-background xl:hover:text-foreground xl:hover:border-2 xl:hover:border-black";

  useEffect(() => {
    gsap.fromTo(
      "#footer",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 }
    );
  }, []);

  return (
    <footer id="footer" className={`${footerPosition} mx-auto w-full p-8 lg:p-12`}>
      <div className="flex flex-col items-center">
        <span className={` text-md uppercase ${textColor} lg:text-3xl`}>
          Keep in touch
        </span>
        <div className="flex flex-col md:flex-row md:gap-x-2 ">
          <Input
            placeholder="Email"
            className={`mx-auto mt-4 w-40 border-2 ${emailButtonBorderColor} ${textColor} ${emailPlaceholderTextColor} bg-transparent`}
          />
          <Button
            className={`mt-4 w-40 ${followMeBgColor} ${followMeTextColor} ${followMeHover}`}
          >
            FOLLOW ME
          </Button>
        </div>
        <div className="flex flex-row pt-4">
          <p
            className={`${textColor}  max-w-[200px] text-center text-[14px] leading-5 xl:max-w-[300px] xl:text-sm xl:leading-6`}
          >
            Welcome to my lands
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
