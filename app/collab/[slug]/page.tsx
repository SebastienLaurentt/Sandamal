import { simplifiedCollab } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import LogoSihinW from "../../../public/images/LogoSihinW.jpg";
import VynilUnfolded from "../../../public/images/VynilUnfolded.jpg";
import Int01 from "../../../public/images/int01.jpg";
import Int02 from "../../../public/images/int02.jpg";
import Int03 from "../../../public/images/int03.jpg";
import Int04 from "../../../public/images/int04.jpg";
import Logo from "../../../public/images/logo.jpg";
import Vynil from "../../../public/images/vynil.png";
import VynilFront from "../../../public/images/vynil_front.jpg";

async function getData(slug: string) {
  const query = `*[_type == "collab" && slug.current == "${slug}"][0] {
        _id,
          images,
          name,
          "slug": slug.current,
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CollabPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: simplifiedCollab = await getData(params.slug);
  return (
    <>
      <div className="sihin pb-20 pt-60 text-center lg:pt-80  xl:pt-40">
        <div className="">
          <h2 className=" text-white">{data.name}</h2>
          <p className="mx-auto px-8 pb-4 pt-8 text-md lg:max-w-[900px] xl:max-w-[1100px] ">
            I had the privilege of crafting the artistic ensemble for the vinyl
            cover of the metal band Sihin. From creating captivating
            illustrations to designing a striking logo, and meticulously
            orchestrating the layout, every aspect of this project was an
            exciting exploration of Sihin&apos;s dark and powerful aesthetic.
            Explore a glimpse of my work for this unique collaboration.
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-12 px-8 py-16 md:flex-row md:justify-center md:gap-x-8 md:gap-y-0 lg:py-24 xl:md:gap-x-14">
          <Image src={VynilFront} alt="Sihin" />
          <Image src={Vynil} alt="Sihin" />
        </div>
        <div className="px-0 py-16 lg:py-24">
          <Image src={VynilUnfolded} alt="Sihin" className="2xl:w-full" />
        </div>
        <div className="mx-auto flex w-fit flex-col justify-center gap-8 px-8 py-16 md:flex-row md:gap-y-0 lg:py-24">
          <Image src={Int01} alt="Sihin" />
          <Image src={Int02} alt="Sihin" />
          <Image src={Int03} alt="Sihin" />
          <Image src={Int04} alt="Sihin" />
        </div>
      </div>
      <div className="flex flex-row justify-center bg-white py-16">
        <Image
          src={LogoSihinW}
          alt="Sihin"
          className="size-36 md:size-48 lg:size-64 xl:size-96"
        />
      </div>
      <div className="flex flex-row justify-center bg-white pb-16">
        <Image src={Logo} alt="Sihin" className="" />
      </div>
    </>
  );
}
