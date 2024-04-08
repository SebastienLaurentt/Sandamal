import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import imgHome from "../public/images/HomePage2.png";
import logo from "../public/images/logo.svg";

export default function Home() {
  return (
    <div className="mb-20">
      <Image
        src={imgHome}
        alt="HomePageImg"
        className="bg-cover bg-center w-full"
      />
      <div className="flex flex-col items-center mt-8 lg:mt-20">
        <Image src={logo} alt="logo" className="" />
        <span className="uppercase lg:m-12 lg:text-[20px]">What&apos; s News ? </span>
          <Input placeholder="Email Adress" className="w-40 mt-4 lg:p-8" />
          <Button className="w-40 mt-4 lg:text-xl lg:p-8">SIGN UP</Button>
      </div>
    </div>
  );
}
