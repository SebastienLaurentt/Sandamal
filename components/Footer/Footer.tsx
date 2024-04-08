import Image from "next/image";
import logoBlack from "../../public/images/logoBlack.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-slate-100 p-12">
      <div className="flex flex-col items-center lg:mt-20">
        <Image src={logoBlack} alt="logo" className="" />
        <span className="mt-8 uppercase lg:m-12 lg:text-[20px]">
          What&apos; s News ?{" "}
        </span>
        <div className="flex flex-col md:flex-row md:gap-x-4">
          <Input
            placeholder="Email Adress"
            className="mt-4 w-40 lg:w-80 lg:p-8 lg:text-xl"
          />
          <Button className="mt-4 w-40 lg:p-8 lg:text-xl">SIGN UP</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
