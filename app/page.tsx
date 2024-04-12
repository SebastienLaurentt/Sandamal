import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <main className="flex max-h-screen min-h-screen items-end justify-center ">
      {/* <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg> */}
      <Footer />
      <video
        preload="yes"
        autoPlay
        loop
        muted
        className="absolute -z-50 size-full object-cover"
      >
        <source src="../videos/Lilith.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
