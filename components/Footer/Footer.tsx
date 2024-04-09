"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const pathname = usePathname();

  const textColor =
    pathname === "/" ? "text-secondary-foreground" : "text-foreground";
  const placeHolderTextButton =
    pathname === "/" ? "placeholder:text-secondary-foreground" : "placeholder:text-foreground";
  const followMeTextColor =
    pathname === "/" ? "text-foreground" : "text-secondary-foreground";
  const followMeButtonColor = pathname === "/" ? "bg-background" : "bg-primary";
  const emailButtonBorderColor =
    pathname === "/" ? "border-white" : "border-black";

  return (
    <div className="  pb-12">
      <div className="flex flex-col items-center">
        <span
          className={` text-[20px] uppercase ${textColor} lg:text-[24px]`}
        >
          Keep in touch
        </span>
        <div className="flex flex-col md:flex-row md:gap-x-2 ">
          <Input
            placeholder="Email"
            className={`mx-auto mt-4 w-40 border-2 ${emailButtonBorderColor} ${placeHolderTextButton} bg-transparent`}
          />
          <Button
            className={`mt-4 w-40 ${followMeButtonColor} ${followMeTextColor}`}
          >
            FOLLOW ME
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
