"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const pathname = usePathname();

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
    pathname === "/" ? "hover:bg-transparent hover:text-white" : "hover:bg-background hover:text-foreground hover:border-2 hover:border-black";

  return (
    <div className="  pb-20 xl:pb-12">
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
            className={`${textColor} max-w-[200px] text-center text-[14px] leading-5 xl:max-w-[300px] xl:text-md xl:leading-6`}
          >
            By the way, my name is Sandamal. Welcome to my lands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
