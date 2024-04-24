import SectionBg from "@/components/Section/SectionBg/SectionBg";
import imgHome from "@/public/images/HomePage2.png";

export default function Home() {
  return (
    <main className="flex h-screen items-end justify-center ">
      {/* <SectionBg bg={imgHome}/> */}
      <video
        preload="yes"
        autoPlay
        muted
        className="absolute -z-50 size-full object-cover"
        style={{ minHeight: "100vh" }}
      >
        <source src="../videos/test.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
