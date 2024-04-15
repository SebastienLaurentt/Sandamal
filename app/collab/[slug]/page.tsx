import { simplifiedCollab } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Section from "@/components/Section/Section";
import Image from "next/image";
import LogoSihinW from "../../../public/images/LogoSihinW.jpg";
import Logo from "../../../public/images/Logo.jpg";
import VynilUnfolded from "../../../public/images/VynilUnfolded.jpg";
import Int01 from "../../../public/images/int01.jpg";
import Int02 from "../../../public/images/int02.jpg";
import Int03 from "../../../public/images/int03.jpg";
import Int04 from "../../../public/images/int04.jpg";
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
      <Section classname="bg-sihin text-center">
        <h2 className=" text-white">{data.name}</h2>
        <p className="text-md text-sihinText">
          I had the privilege of crafting the artistic ensemble for the vinyl
          cover of the metal band Sihin. From creating captivating illustrations
          to designing a striking logo, and meticulously orchestrating the
          layout, every aspect of this project was an exciting exploration of
          Sihin&apos;s dark and powerful aesthetic. Explore a glimpse of my work
          for this unique collaboration.
        </p>
        <div className=" flex flex-row gap-x-14 py-8">
          <Image src={VynilFront} alt="Sihin" className="w-1/3" />
          <Image src={Vynil} alt="Sihin" className="w-2/3" />
        </div>
        <div>
          <Image src={VynilUnfolded} alt="Sihin" />
        </div>
        <div className="flex w-full flex-row  gap-x-8 py-8">
          <Image src={Int01} alt="Sihin" />
          <Image src={Int02} alt="Sihin" />
          <Image src={Int03} alt="Sihin" />
          <Image src={Int04} alt="Sihin" />
        </div>
      </Section>
      <div className="flex flex-row justify-center bg-white py-16">
        <Image src={LogoSihinW} alt="Sihin" className="size-96" />
      </div>
      <div className="flex flex-row justify-center bg-white py-16">
        <Image src={Logo} alt="Sihin" className="" />
      </div>
    </>
  );
}
