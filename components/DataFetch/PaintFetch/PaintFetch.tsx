import { client, urlFor } from "@/app/lib/sanity";
import Section from "@/components/Section/Section";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "paint"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function PaintFetch() {
  const data = await getData();
  return (
    <Section
      classname="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4"
      marginTop={true}
      marginBottom={true}
    >
      {data.map((paint: any, index: number) => (
        <div key={index} className=" ">
          <div className="rounded-md   ">
            <Image
              src={urlFor(paint.paintImage).url()}
              alt="Great Photo"
              className="size-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </Section>
  );
}
