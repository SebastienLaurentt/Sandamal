export default function Home() {
  return (
    <main>
      {/* <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg> */}
      <video
        src={require("../public/videos/Red.mp4")}
        autoPlay
        muted
        loop
        className="size-full object-cover object-center"
        style={{ minHeight: "100vh" }} // Pour assurer que la vidéo couvre au moins toute la hauteur de l'écran
      ></video>
    </main>
  );
}
