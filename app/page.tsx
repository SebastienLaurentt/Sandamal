import SignUp from "@/components/Footer/Footer";
import SectionBg from "@/components/Section/SectionBg/SectionBg";
import imgHome from "../public/images/HomePage2.png";

export default function Home() {
  return (
    <main>
      <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg>
      <SignUp />
    </main>
  );
}
