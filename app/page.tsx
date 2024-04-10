import Footer from "@/components/Footer/Footer";
import Video from "../public/videos/Lilith.mp4";  


export default function Home() {
  return (
    <main className="flex h-screen items-end justify-center ">
      {/* <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg> */}
      <Footer />
      <video
        preload="yes"
        autoPlay
        loop
        className="absolute -z-50 size-full object-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>
      {/* <video
        src={require("../public/videos/Lilith.mp4")}
        autoPlay
        muted
        loop
        className="absolute -z-50 size-full object-cover"
        style={{ minHeight: "100vh" }}
      ></video> */}
    </main>
  );
}
