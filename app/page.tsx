import Image from "next/image";
import imgHome from "../public/images/HomePage2.png";

export default function Home() {
  return (
<div className="">
  <Image src={imgHome} alt="HomePageImg" className="bg-cover bg-center w-full" />
</div>
  );
}
