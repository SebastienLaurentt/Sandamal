import SectionBg from "@/components/Section/SectionBg/SectionBg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import imgHome from "../public/images/HomePage2.png";


export default function Home() {
  return (
    <main>
      <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg>
      
    </main>
  );
}
