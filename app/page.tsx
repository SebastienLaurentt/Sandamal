import SectionBg from "@/components/Section/SectionBg/SectionBg";
import imgHome from "@/public/images/HomePage2.png";

export default function Home() {
  return (
    <main className="flex h-screen items-end justify-center ">
      <SectionBg bg={imgHome} minHeightScreen={true}/>
      {/* <video
        preload="yes"
        autoPlay
        loop
        muted
        className="absolute -z-50 size-full object-cover"
        style={{ minHeight: "100vh" }}
      >
        <source src="../videos/Lilith.mp4" type="video/mp4" />
      </video> */}
    </main>
  );
}
