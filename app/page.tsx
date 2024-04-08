import SectionBg from "@/components/Section/SectionBg/SectionBg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import imgHome from "../public/images/HomePage2.png";
import logoBlack from "../public/images/logoBlack.svg";

export default function Home() {
  return (
    <main>
      <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg>
      <div className="m-8">
        <div className="flex flex-col items-center lg:mt-20">
          <Image src={logoBlack} alt="logo" className="" />
          <span className="uppercase lg:m-12 lg:text-[20px] mt-8">
            What&apos; s News ?{" "}
          </span>
          <div className="flex flex-col md:flex-row md:gap-x-4">
            <Input
              placeholder="Email Adress"
              className="w-40 lg:w-80 mt-4 lg:text-xl lg:p-8"
            />
            <Button className="w-40 mt-4 lg:text-xl lg:p-8">SIGN UP</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
