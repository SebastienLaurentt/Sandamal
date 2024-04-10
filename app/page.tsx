import Footer from "@/components/Footer/Footer";

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
        <source src={require("../public/videos/Lilith.mp4")} type="video/mp4" />
        <track
          src={require("../public/videos/Lilith.mp4")}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
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
