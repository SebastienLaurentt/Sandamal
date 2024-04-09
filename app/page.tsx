import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex h-screen items-end justify-center ">
      {/* <SectionBg bg={imgHome} minHeightScreen={true}></SectionBg> */}
      <div className="  p-12">
        <div className="flex flex-col items-center lg:mt-20">
          <span className="mt-8 uppercase text-white lg:text-[32px]">
            Want News ?{" "}
          </span>
          <div className="flex flex-col md:flex-row md:gap-x-2 ">
            <Input
              placeholder="Email"
              className="mx-auto mt-4 w-40 border-2 border-white bg-transparent"
            />
            <Button className="mt-4 w-40 bg-white text-black">
              FOLLOW ME
            </Button>
          </div>
        </div>
      </div>
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
