import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex h-screen items-end justify-center ">
      {/* <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg> */}
      <Footer />
      <video
        src={require("../public/videos/Lilith.mp4")}
        autoPlay
        muted
        loop
        className="absolute -z-50 size-full object-cover"
        style={{ minHeight: "100vh" }} // Pour assurer que la vidéo couvre au moins toute la hauteur de l'écran
      ></video>
    </main>
  );
}
